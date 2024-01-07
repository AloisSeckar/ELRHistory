<template>
  <div>
    <AdminFormSelectItem :label="useTAdminSelect('article')" :options="articleOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ useTAdminEdit('article') }}: <strong>{{ currentArticleName }}</strong></h2>
    <AdminFormArticle :article-id="articleId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Article, ArticleDB } from '@/database/types'

const initStores = async () => {
  await useArticleStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
  await useGalleryStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const articleId = idString === 'first' ? useArticleStore().getFirstId : parseInt(idString)

const selected = ref(0)
const articleOptions = [] as FormKitOptionsItem[]
let currentArticleName: string
for (let i = 0; i < useArticleStore().items.length; i++) {
  const item: Article = useArticleStore().items[i] as Article
  articleOptions.push({ value: item.articleId, label: item.name })
  if (item.articleId === articleId) {
    selected.value = item.articleId
    currentArticleName = item.name
  }
}

const save = async (article: ArticleDB) => {
  await useUpdateItem(useArticleStore(), 'article', `/article/${articleId}`, article, articleId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/article/' + callback)
}
</script>

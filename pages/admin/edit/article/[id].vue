<template>
  <div>
    <AdminFormSelectItem :label="'Select article:'" :options="articleOptions" :selected="selected" @select-item="changeItem" />
    Edit article <strong>{{ currentArticleName }}</strong>
    <AdminFormArticle :article-id="articleId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { FormKitOptionsItem } from '@formkit/inputs'
import type { Article, ArticleDB } from '@/database/types'

const idString = useRoute().params.id as string
const articleId = parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const articleOptions = [] as FormKitOptionsItem[]
let currentArticleName: string
for (let i = 0; i < useArticleStore().items.length; i++) {
  const item: Article = useArticleStore().items[i] as Article
  articleOptions.push({ value: item.articleId, label: item.name })
  if (item.articleId === articleId) {
    selected.value = item.articleId
    selected.label = item.name
    currentArticleName = item.name
  }
}

const save = async (article: ArticleDB) => {
  await useUpdateItem(useArticleStore(), 'article', `/article/${articleId}`, article, articleId)
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/article/' + calback)
}

onBeforeMount(async () => {
  await useArticleStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
  await useGalleryStore().init()
})
</script>

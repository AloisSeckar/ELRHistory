<template>
  <div>
    <h2>{{ useTAdminAdd('article') }}</h2>
    <AdminFormArticle :article-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { ArticleDB } from '@/database/types'

const save = async (article: ArticleDB) => {
  await useUpdateItem(useArticleStore(), 'article', '/articles', article)
}

onBeforeMount(async () => {
  await useArticleStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
})
</script>

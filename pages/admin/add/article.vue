<template>
  <div>
    <h1>Add new article</h1>
    <AdminFormArticle :article-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { ArticleDB } from '@/database/types'

const save = async (article: ArticleDB) => {
  await useUpdateItem(useArticleStore(), 'article', '/articles', article)
}

onBeforeMount(async () => {
  await useArticleStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>

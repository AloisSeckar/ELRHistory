<template>
  <div>
    <h2>{{ useTAdminAdd('article') }}</h2>
    <AdminFormArticle :article-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { ArticleDB } from '@/database/types'

await useArticleStore().init()
await useAuthorStore().init()
await useCategoryStore().init()
await useGalleryStore().init()

const save = async (article: ArticleDB) => {
  await useUpdateItem(useArticleStore(), 'article', '/articles', article)
}
</script>

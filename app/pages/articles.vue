<template>
  <div>
    <ItemArticle v-for="article in (articles.items as Article[])" :key="article.articleId" :item="article" />
    <div class="-mt-2 text-lg">
      {{ $t('articles.total') }}: <strong>{{ articles.getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/../database/types'

const articles = useArticleStore()
await articles.init()
</script>

<template>
  <div>
    <ItemArticle v-for="article in (useArticleStore().items as Article[])" :key="article.articleId" :item="article" />
    <div class="-mt-2 text-lg">
      {{ $t('articles.total') }}: <strong>{{ useArticleStore().getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Article } from '@/database/types'
</script>

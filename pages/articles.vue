<template>
  <div>
    <ItemArticle v-for="article in useArticleStore().items" :key="article.articleId" :item="article" />
    <div class="-mt-2 text-lg">
      {{ text.getKey('articles-total') }}: <strong>{{ useArticleStore().getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

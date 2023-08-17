<template>
  <div>
    <ItemArticle v-for="article in useArticleStore().items" :key="article.articleId" :item="article" />
    <div class="-mt-2 text-lg">
      {{ $t('articles.total') }}: <strong>{{ useArticleStore().getCount }}</strong>
    </div>
  </div>
</template>

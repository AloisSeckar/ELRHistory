<template>
    <div>
        <ItemArticle v-for="article in useArticleStore().items" :item="article" />
        <div class="-mt-2 text-lg">Total articles: <strong>{{ useArticleStore().getCount }}</strong></div>
    </div>
</template>

<template>
    <div>
        <ArticleItem v-for="article in articles.items" :item="article" />
    </div>
</template>

<script setup lang="ts">
const articles = useArticleStore()
if (!articles.loaded) {
    await articles.fill()
}
</script>
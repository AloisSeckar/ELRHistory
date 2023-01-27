<template>
    <div>
        <h1>Add new article</h1>
        <AdminFormArticle :article_id="-1" @save="save" />
    </div>
</template>

<script setup lang="ts">
import { ArticleDB } from '@/database/types';

const save = (article: ArticleDB) => {
    console.log(article)
    article.date_created = new Date().toISOString()
    article.date_edited = new Date().toISOString()
    useArticleStore().create(JSON.parse(JSON.stringify(article)));
}
</script>
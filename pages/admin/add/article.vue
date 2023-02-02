<template>
    <div>
        <h1>Add new article</h1>
        <AdminFormArticle :articleId="-1" @save="save" />
    </div>
</template>

<script setup lang="ts">
import { ArticleDB } from '@/database/types';

const save = async (article: ArticleDB) => {
    const result = await useArticleStore().create(JSON.parse(JSON.stringify(article)))
    if (result) {
        useModalStore().showModal("Item saved", "Article was successfully created");
        return navigateTo('/articles')
    } else {
        useModalStore().showModal("Error", "Article wasn't created");
    }
}
</script>
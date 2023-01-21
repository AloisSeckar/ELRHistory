<template>
    <div>
        <h1>Add new article</h1>
        <AdminFormArticle :article="article" @save="save" />
    </div>
</template>

<script setup lang="ts">
const article = reactive(useArticleStore().getEmpty)
console.log(article)
article.author_id = useAuthorStore().getItems?.[0]?.author_id
article.category_id = useCategoryStore().getByType('a')?.[0]?.category_id
article.gallery_id = undefined

const save = () => {
    console.log(article)
    useArticleStore().save(JSON.parse(JSON.stringify(article)));
}
</script>
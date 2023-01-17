<template>
    <div>
        <h1>Add new article</h1>
        <AdminFormArticle :article="article" @save="save" />
    </div>
</template>

<script setup lang="ts">
const authors = useAuthorStore().getItems.map(author => ({ value: author.author_id, label: author.name }))
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat.category_id, label: cat.name }))

const article = reactive(useArticleStore().getEmpty)
article.author_id = authors[0].value
article.category_id = categories[0].value
article.gallery_id = null

const save = () => {
    useArticleStore().save(JSON.parse(JSON.stringify(article)));
}
</script>
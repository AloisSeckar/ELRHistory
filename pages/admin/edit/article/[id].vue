<template>
    <div>
        Edit article <strong>{{ article.name }}</strong>
        <AdminFormArticle :article="article" @save="save" />
    </div>
</template>

<script setup lang="ts">
const id = new Number(useRoute().params.id);
const storedArticle = useArticleStore().getById(id);

const article = reactive(JSON.parse(JSON.stringify(storedArticle)));
article.author_id = storedArticle.elrh_author.author_id;
delete article.elrh_author;
article.category_id = storedArticle.elrh_category.category_id;
delete article.elrh_category;
article.gallery_id = storedArticle.elrh_gallery?.gallery_id;
delete article.elrh_gallery;

const save = () => {
    // TODO category and gallery not changing
    useArticleStore().update(JSON.parse(JSON.stringify(article)));
}
</script>
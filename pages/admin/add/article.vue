<template>
    <div>
        <h1>Add new article</h1>
        <FormKit type="form" @submit="save" submit-label="Add">
            <FormKit
                type="select" name="author" id="author"
                label="Author:" validation="required"
                :options="authors"
                v-model="article.elrh_author" />
            <FormKit
                type="select" name="category" id="category"
                label="Category:" validation="required"
                :options="categories"
                v-model="article.elrh_category" />
            <FormKit
                type="text" name="name" id="name"
                label="Name:" validation="required"
                v-model="article.name" />
            <FormKit
                type="text" name="dscr" id="dscr"
                label="Description:" validation="required"
                v-model="article.dscr" />
            <FormKit
                type="textarea" name="content" id="content"
                label="Content:" validation="required"
                v-model="article.content" />
            <FormKit
                type="text" name="thumb" id="thumb"
                label="Thumb:" validation="required"
                v-model="article.thumb" />
            <FormKit
                type="select" name="gallery" id="gallery"
                label="Related gallery:"
                :options="galleries"
                v-model="article.elrh_gallery" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
const authors = useAuthorStore().getItems.map(author => ({ value: author.author_id, label: author.name }))
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat.category_id, label: cat.name }))
const galleries = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery.gallery_id, label: gallery.name }))

const article = reactive(useArticleStore().getEmpty)
article.author_id = authors[0].value
article.category_id = categories[0].value
article.gallery_id = null

const save = () => {
    useArticleStore().save(JSON.parse(JSON.stringify(article)));
}
</script>
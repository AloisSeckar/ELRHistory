<template>
    <div>
        <h1>Add new article</h1>
        <FormKit type="form" @submit="save" submit-label="Add">
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
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat, label: cat.name }))
const galleries = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery, label: gallery.name }))

const article = reactive(useArticleStore().getEmpty)

const save = () => {
    useArticleStore().save(article)
}
</script>
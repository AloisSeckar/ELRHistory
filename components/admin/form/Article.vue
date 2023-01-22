<template>
    <div>
        <FormKit type="form" @submit="$emit('save', article)" submit-label="Add">
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
            <AdminFormSelectImage :source="article.thumb" @change="setThumb" />
            <FormKit
                type="select" name="gallery" id="gallery"
                label="Related gallery:"
                :options="galleries"
                v-model="article.elrh_gallery" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import type { Article, ArticleDB } from '@/database/types'
import { PropType } from 'vue'

const props = defineProps({
    article: { type: Object as PropType<Article|ArticleDB>, required: true },
})
defineEmits<{
  (e: 'save', article: Article): void
}>()

const authors = useAuthorStore().getItems.map(author => ({ value: author.author_id, label: author.name }))
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat.category_id, label: cat.name }))
const galleries = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery.gallery_id, label: gallery.name }))

const setThumb = (path: string) => props.article.thumb = path
</script>
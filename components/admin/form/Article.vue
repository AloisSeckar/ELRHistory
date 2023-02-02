<template>
    <div>
        <FormKit type="form" :submit-label="label" #default="{ value }" @submit="saveForm">
            <pre>{{ value }}</pre>
            <FormKit
                type="select" name="authorId" id="authorId"
                label="Author:" validation="required"
                :options="authors"
                v-model="article.authorId" />
            <FormKit
                type="select" name="categoryId" id="categoryId"
                label="Category:" validation="required"
                :options="categories"
                v-model="article.categoryId" />
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
                type="select" name="galleryId" id="galleryId"
                label="Related gallery:"
                :options="galleries"
                v-model="article.galleryId" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import type { ArticleDB } from '@/database/types'

const props = defineProps({
    articleId: { type: Number, default: -1 },
})
const emit = defineEmits<{
  (e: 'save', article: ArticleDB): void
}>()

let label: string
let article: ArticleDB
if (props.articleId > 0) {
    label = "Edit"
    const {articleId, ...currentArticle} = useArticleStore().getById(props.articleId)
    article = reactive(JSON.parse(JSON.stringify(currentArticle)));

    if (currentArticle.elrhAuthor) {
        article.authorId = currentArticle.elrhAuthor.authorId;
    }
    if (currentArticle.elrhCategory) {
        article.categoryId = currentArticle.elrhCategory.categoryId;
    }
    article.galleryId = currentArticle?.elrhGallery?.galleryId;
} else {
    label = "Add"
    article = reactive(JSON.parse(JSON.stringify(useArticleStore().getEmpty)))
    article.authorId = useAuthorStore().getItems?.[0]?.authorId
    article.categoryId = useCategoryStore().getByType('a')?.[0]?.categoryId
    article.galleryId = undefined
}

const authors = useAuthorStore().getItems.map(author => ({ value: author.authorId, label: author.name }))
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat.categoryId, label: cat.name }))
const galleries = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery.galleryId, label: gallery.name }))
galleries.unshift({ value: -1, label: "" })

const setThumb = (path: string) => article.thumb = path

const saveForm = (values: any) => {
    emit("save", JSON.parse(JSON.stringify(values)))
}

</script>
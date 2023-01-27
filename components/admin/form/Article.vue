<template>
    <div>
        <FormKit type="form" submit-label="Add" #default="{ value }" @submit="saveForm">
            <pre>{{ value }}</pre>
            <FormKit
                type="select" name="author_id" id="author_id"
                label="Author:" validation="required"
                :options="authors"
                v-model="article.author_id" />
            <FormKit
                type="select" name="category_id" id="category_id"
                label="Category:" validation="required"
                :options="categories"
                v-model="article.category_id" />
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
                type="select" name="gallery_id" id="gallery_id"
                label="Related gallery:"
                :options="galleries"
                v-model="article.gallery_id" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import type { ArticleDB } from '@/database/types'

const props = defineProps({
    article_id: { type: Number, default: -1 },
})
const emit = defineEmits<{
  (e: 'save', article: ArticleDB): void
}>()

let article: ArticleDB = {} as ArticleDB
if (props.article_id > 0) {
    const {article_id, ...currentArticle} = useArticleStore().getById(props.article_id)
    article = reactive(JSON.parse(JSON.stringify(currentArticle)));

    if (currentArticle.elrh_author) {
        article.author_id = currentArticle.elrh_author.author_id;
    }
    if (currentArticle.elrh_category) {
        article.category_id = currentArticle.elrh_category.category_id;
    }
    article.gallery_id = currentArticle?.elrh_gallery?.gallery_id;
} else {
    article = reactive(JSON.parse(JSON.stringify(useArticleStore().getEmpty)))
    article.author_id = useAuthorStore().getItems?.[0]?.author_id
    article.category_id = useCategoryStore().getByType('a')?.[0]?.category_id
    article.gallery_id = undefined
}

const authors = useAuthorStore().getItems.map(author => ({ value: author.author_id, label: author.name }))
const categories = useCategoryStore().getByType('a').map(cat => ({ value: cat.category_id, label: cat.name }))
const galleries = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery.gallery_id, label: gallery.name }))
galleries.unshift({ value: -1, label: "" })

const setThumb = (path: string) => article.thumb = path

const saveForm = (values: any) => {
    emit("save", JSON.parse(JSON.stringify(values)))
}

</script>
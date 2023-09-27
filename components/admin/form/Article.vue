<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        v-model="article.authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="categoryId"
        v-model="article.categoryId"
        type="select"
        name="categoryId"
        label="Category:"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="name"
        v-model="article.name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="dscr"
        v-model="article.dscr"
        type="text"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <FormKit
        id="content"
        v-model="article.content"
        type="textarea"
        name="content"
        label="Content:"
        validation="required"
      />
      <AdminFormSelectImage :source="article.thumb" @change="setThumb" />
      <FormKit
        id="galleryId"
        v-model="article.galleryId"
        type="select"
        name="galleryId"
        label="Related gallery:"
        :options="galleries"
      />
      <FormKit
        id="dateCreated"
        v-model="article.dateCreated"
        name="dateCreated"
        type="hidden"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { ArticleDB } from '@/database/types'

const props = defineProps({
  articleId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', article: ArticleDB): void }>()

let label: string
let article: ArticleDB
if (props.articleId > 0) {
  label = 'Edit'
  const { articleId, ...currentArticle } = useArticleStore().getById(props.articleId)
  article = reactive(JSON.parse(JSON.stringify(currentArticle)))

  if (currentArticle.elrhAuthor) {
    article.authorId = currentArticle.elrhAuthor.authorId
  }
  if (currentArticle.elrhCategory) {
    article.categoryId = currentArticle.elrhCategory.categoryId
  }
  article.galleryId = currentArticle?.elrhGallery?.galleryId
} else {
  label = 'Add'
  article = reactive(JSON.parse(JSON.stringify(useArticleStore().getEmpty)))
  article.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
  article.categoryId = useCategoryStore().getByType('a')?.[0]?.categoryId || -1
  article.galleryId = undefined
}

const authors = computed(() => useAuthorStore().getAuthorList)
const categories = computed(() => useCategoryStore().getCategoryList('a'))
const galleries = computed(() => {
  const ret = useGalleryStore().getItems.sort((a, b) => a.name.localeCompare(b.name)).map(gallery => ({ value: gallery.galleryId, label: gallery.name }))
  ret.unshift({ value: -1, label: '' })
  return ret
})

const setThumb = (path: string) => {
  article.thumb = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

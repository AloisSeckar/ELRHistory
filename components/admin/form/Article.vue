<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="article" :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        :label="useT('admin.form.author')"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="categoryId"
        type="select"
        name="categoryId"
        :label="useT('admin.form.category')"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="name"
        type="text"
        name="name"
        :label="useT('admin.form.name')"
        validation="required"
      />
      <FormKit
        id="dscr"
        type="textarea"
        name="dscr"
        :label="useT('admin.form.dscr')"
        validation="required"
        :maxlength="255"
        input-class="ta-small"
      />
      <FormKit
        id="content"
        type="textarea"
        name="content"
        :label="useT('admin.form.content')"
        validation="required"
      />
      <AdminFormSelectImage :source="article.thumb" :label="useT('admin.form.thumb')" @change="setThumb" />
      <FormKit
        id="galleryId"
        type="select"
        name="galleryId"
        :label="useT('admin.form.related')"
        :options="galleries"
      />
      <FormKit
        id="dateCreated"
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
  label = useT('admin.edit')
  const { articleId, ...currentArticle } = useArticleStore().getById(props.articleId)
  article = reactive({
    categoryId: currentArticle.elrhCategory?.categoryId || -1,
    dateCreated: currentArticle.dateCreated,
    dateEdited: currentArticle.dateEdited,
    name: currentArticle.name,
    dscr: currentArticle.dscr,
    content: currentArticle.content,
    thumb: currentArticle.thumb,
    authorId: currentArticle.elrhAuthor?.authorId || -1,
    galleryId: currentArticle?.elrhGallery?.galleryId
  })
} else {
  label = useT('admin.add')
  article = reactive(useArticleStore().getEmpty)
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

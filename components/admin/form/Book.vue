<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="book" :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="categoryId"
        type="select"
        name="categoryId"
        label="Category:"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="year"
        type="number"
        name="year"
        label="Published:"
        validation="required"
      />
      <FormKit
        id="name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="writer"
        type="text"
        name="writer"
        label="Writer:"
        validation="required"
      />
      <FormKit
        id="dscr"
        type="text"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <AdminFormSelectImage :source="book.thumb" @change="setThumb" />
      <FormKit
        id="url"
        type="text"
        name="url"
        label="URL:"
        validation="required"
      />
      <FormKit
        id="review"
        type="text"
        name="review"
        label="Review:"
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
import type { BookDB } from '@/database/types'

const props = defineProps({
  bookId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', article: BookDB): void }>()

let label: string
let book: BookDB
if (props.bookId > 0) {
  label = useT('admin.edit')
  const { bookId, ...currentBook } = useBookStore().getById(props.bookId)
  book = reactive({
    categoryId: currentBook.elrhCategory?.categoryId || -1,
    ord: currentBook.ord,
    dateCreated: currentBook.dateCreated,
    dateEdited: currentBook.dateEdited,
    writer: currentBook.writer,
    name: currentBook.name,
    dscr: currentBook.dscr,
    url: currentBook.url,
    thumb: currentBook.thumb,
    review: currentBook.review,
    year: currentBook.year,
    authorId: currentBook.elrhAuthor?.authorId || -1
  })
} else {
  label = useT('admin.add')
  book = reactive(useBookStore().getEmpty)
  book.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
  book.categoryId = useCategoryStore().getByType('b')?.[0]?.categoryId || -1
}

const authors = computed(() => useAuthorStore().getAuthorList)
const categories = computed(() => useCategoryStore().getCategoryList('b'))

const setThumb = (path: string) => {
  book.thumb = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

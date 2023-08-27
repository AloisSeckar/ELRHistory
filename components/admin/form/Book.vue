<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        v-model="book.authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="categoryId"
        v-model="book.categoryId"
        type="select"
        name="categoryId"
        label="Category:"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="year"
        v-model="book.year"
        type="number"
        name="year"
        label="Published:"
        validation="required"
      />
      <FormKit
        id="name"
        v-model="book.name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="writer"
        v-model="book.writer"
        type="text"
        name="writer"
        label="Writer:"
        validation="required"
      />
      <FormKit
        id="dscr"
        v-model="book.dscr"
        type="text"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <AdminFormSelectImage :source="book.thumb" @change="setThumb" />
      <FormKit
        id="url"
        v-model="book.url"
        type="text"
        name="url"
        label="URL:"
        validation="required"
      />
      <FormKit
        id="review"
        v-model="book.review"
        type="text"
        name="review"
        label="Review:"
      />
      <FormKit
        id="dateCreated"
        v-model="book.dateCreated"
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
  label = 'Edit'
  const { bookId, ...currentBook } = useBookStore().getById(props.bookId)
  book = reactive(JSON.parse(JSON.stringify(currentBook)))

  if (currentBook.elrhAuthor) {
    book.authorId = currentBook.elrhAuthor.authorId
  }
  if (currentBook.elrhCategory) {
    book.categoryId = currentBook.elrhCategory.categoryId
  }
} else {
  label = 'Add'
  book = reactive(JSON.parse(JSON.stringify(useBookStore().getEmpty)))
  book.authorId = useAuthorStore().getItems?.[0]?.authorId
  book.categoryId = useCategoryStore().getByType('b')?.[0]?.categoryId
}

const authors = computed(() => useAuthorStore().getAuthorList)
const categories = computed(() => useCategoryStore().getByType('b').map(cat => ({ value: cat.categoryId, label: cat.name })))

const setThumb = (path: string) => {
  book.thumb = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

<template>
  <div>
    <AdminFormSelectItem :label="'Select book:'" :options="bookOptions" :selected="selected" @select-item="changeItem" />
    <h2>Edit book <strong>{{ currentBookName }}</strong></h2>
    <AdminFormBook :book-id="bookId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Book, BookDB } from '@/database/types'

const initStores = async () => {
  await useBookStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const bookId = idString === 'first' ? useBookStore().getFirstId : parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const bookOptions = [] as FormKitOptionsItem[]
let currentBookName: string
for (let i = 0; i < useBookStore().items.length; i++) {
  const item: Book = useBookStore().items[i] as Book
  bookOptions.push({ value: item.bookId, label: item.name })
  if (item.bookId === bookId) {
    selected.value = item.bookId
    selected.label = item.name
    currentBookName = item.name
  }
}

const save = async (book: BookDB) => {
  await useUpdateItem(useBookStore(), 'book', '/books', book, bookId)
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/book/' + calback)
}
</script>

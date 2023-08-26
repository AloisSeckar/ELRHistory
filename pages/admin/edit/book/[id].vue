<template>
  <div>
    <AdminFormSelectItem :label="'Select book:'" :options="bookOptions" :selected="selected" @select-item="changeItem" />
    Edit book <strong>{{ currentBookName }}</strong>
    <AdminFormBook :book-id="bookId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { FormKitOptionsItem } from '@formkit/inputs'
import type { Book, BookDB } from '@/database/types'

const idString = useRoute().params.id as string
const bookId = parseInt(idString)

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
  await useUpdateItem(useBookStore(), book, bookId, 'book', '/books')
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/book/' + calback)
}

onBeforeMount(async () => {
  await useBookStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>

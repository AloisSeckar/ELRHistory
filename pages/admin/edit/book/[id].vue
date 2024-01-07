<template>
  <div>
    <AdminFormSelectItem :label="useT('admin.select.book')" :options="bookOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ $t('admin.edit.article') }}: <strong>{{ currentBookName }}</strong></h2>
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

const selected = ref(0)
const bookOptions = [] as FormKitOptionsItem[]
let currentBookName: string
for (let i = 0; i < useBookStore().items.length; i++) {
  const item: Book = useBookStore().items[i] as Book
  bookOptions.push({ value: item.bookId, label: item.name })
  if (item.bookId === bookId) {
    selected.value = item.bookId
    currentBookName = item.name
  }
}

const save = async (book: BookDB) => {
  await useUpdateItem(useBookStore(), 'book', '/books', book, bookId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/book/' + callback)
}
</script>

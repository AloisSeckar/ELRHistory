<template>
  <div>
    <h1>Add new book</h1>
    <AdminFormBook :book-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { BookDB } from '@/database/types'

const save = async (book: BookDB) => {
  await useUpdateItem(useBookStore(), 'book', '/books', book)
}

onBeforeMount(async () => {
  await useBookStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>

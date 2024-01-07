<template>
  <div>
    <h2>Add new book</h2>
    <AdminFormBook :book-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { BookDB } from '@/database/types'

const save = async (book: BookDB) => {
  await useUpdateItem(useBookStore(), 'book', '/books', book)
}

onBeforeMount(async () => {
  await useBookStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
})
</script>

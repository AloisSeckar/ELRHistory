<template>
  <div>
    <h2>{{ useTAdminAdd('book') }}</h2>
    <AdminFormBook :book-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { BookDB } from '@/database/types'

await useBookStore().init()
await useAuthorStore().init()
await useCategoryStore().init()

const save = async (book: BookDB) => {
  await useUpdateItem(useBookStore(), 'book', '/books', book)
}
</script>

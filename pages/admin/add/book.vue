<template>
  <div>
    <h1>Add new book</h1>
    <AdminFormBook :book-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { BookDB } from '@/database/types'

const save = async (book: BookDB) => {
  const result = await useBookStore().update(JSON.parse(JSON.stringify(book)))
  if (result) {
    useModalStore().showModal('Item saved', 'Book was successfully created')
    return navigateTo('/books')
  } else {
    useModalStore().showModal('Error', "Book wasn't created")
    // TODO preserve input if error occured
  }
}
onBeforeMount(async () => {
  await useBookStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>

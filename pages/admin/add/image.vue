<template>
  <div>
    <h1>Add new image</h1>
    <AdminFormImage :image-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { ImageDB } from '@/database/types'

const save = async (image: ImageDB) => {
  // TODO link to gallery
  await useUpdateItem(useImageStore(), 'image', '/galleries', image)
}

onBeforeMount(async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

<template>
  <div>
    <h2>Add new image</h2>
    <AdminFormImage :image-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { ImageDB } from '@/database/types'

const save = async (image: ImageDB) => {
  await useUpdateItem(useImageStore(), 'image', `/gallery/${image.galleryId}`, image)
}

onBeforeMount(async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

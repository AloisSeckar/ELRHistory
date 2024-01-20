<template>
  <div>
    <h2>{{ useTAdminAdd('image') }}</h2>
    <AdminFormImage :image-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { ImageDB } from '@/database/types'

await useAuthorStore().init()
await useGalleryStore().init()
await useImageStore().init()

const save = async (image: ImageDB) => {
  await useUpdateItem(useImageStore(), 'image', `/gallery/${image.galleryId}`, image)
}
</script>

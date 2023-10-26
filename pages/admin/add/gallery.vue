<template>
  <div>
    <h1>Add new gallery</h1>
    <AdminFormGallery :gallery-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { GalleryDB } from '@/database/types'

const save = async (gallery: GalleryDB) => {
  await useUpdateItem(useGalleryStore(), 'gallery', '/galleries', gallery)
}

onBeforeMount(async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

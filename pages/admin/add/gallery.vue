<template>
  <div>
    <h2>{{ useTAdminAdd('gallery') }}</h2>
    <AdminFormGallery :gallery-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { GalleryDB } from '@/database/types'

await useAuthorStore().init()
await useGalleryStore().init()
await useImageStore().init()

const save = async (gallery: GalleryDB) => {
  await useUpdateItem(useGalleryStore(), 'gallery', '/galleries', gallery)
}
</script>

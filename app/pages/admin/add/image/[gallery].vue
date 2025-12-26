<template>
  <div>
    <h2>{{ useTAdminAdd('image') }}</h2>
    <AdminFormImage :image-id="-1" :gallery-id="galleryId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { ImageDB } from '@/../database/types'

await useAuthorStore().init()
await useGalleryStore().init()
await useImageStore().init()

const idString = useRoute().params.gallery as string
const galleryId = idString === 'first' ? useGalleryStore().getFirstId : parseInt(idString)

const save = async (image: ImageDB) => {
  // always add new image as last
  image.ord = useImageStore().getCountByGallery(image.galleryId) + 1
  //
  await useUpdateItem(useImageStore().update, 'image', `/gallery/${image.galleryId}`, image)
}
</script>

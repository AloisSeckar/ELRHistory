<template>
  <div>
    <AdminFormSelectItem :label="useT('admin.select.gallery')" :options="galleryOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ $t('admin.edit.article') }}: <strong>{{ currentGalleryName }}</strong></h2>
    <AdminFormGallery :gallery-id="galleryId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Gallery, GalleryDB } from '@/database/types'

const initStores = async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const galleryId = idString === 'first' ? useGalleryStore().getFirstId : parseInt(idString)

const selected = ref(0)
const galleryOptions = [] as FormKitOptionsItem[]
let currentGalleryName: string
for (let i = 0; i < useGalleryStore().items.length; i++) {
  const item: Gallery = useGalleryStore().items[i] as Gallery
  galleryOptions.push({ value: item.galleryId, label: item.name })
  if (item.galleryId === galleryId) {
    selected.value = item.galleryId
    currentGalleryName = item.name
  }
}

const save = async (gallery: GalleryDB) => {
  await useUpdateItem(useGalleryStore(), 'gallery', `/gallery/${galleryId}`, gallery, galleryId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/gallery/' + callback)
}
</script>

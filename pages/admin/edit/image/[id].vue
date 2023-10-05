<template>
  <div>
    <AdminFormSelectItem :label="'Select image:'" :options="imageOptions" :selected="selected" @select-item="changeItem" />
    Edit image <strong>{{ currentImageName }}</strong>
    <AdminFormImage :image-id="imageId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { FormKitOptionsItem } from '@formkit/inputs'
import type { Image, ImageDB } from '@/database/types'

const idString = useRoute().params.id as string
const imageId = parseInt(idString)

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const imageOptions = [] as FormKitOptionsItem[]
let currentImageName: string
for (let i = 0; i < useImageStore().items.length; i++) {
  const item: Image = useImageStore().items[i] as Image
  imageOptions.push({ value: item.imageId, label: item.name })
  if (item.imageId === imageId) {
    selected.value = item.imageId
    selected.label = item.name
    currentImageName = item.name
  }
}

const save = async (image: ImageDB) => {
  // TODO link to gallery
  await useUpdateItem(useImageStore(), 'image', '/galleries', image, imageId)
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/image/' + calback)
}

onBeforeMount(async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

<template>
  <div>
    <AdminFormSelectItem :label="useTAdminSelect('image')" :options="imageOptions" :selected="selected" @select-item="changeItem" />
    <h2>{{ useTAdminEdit('image') }}: <strong>{{ currentImageName }}</strong></h2>
    <AdminFormImage :image-id="imageId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Image, ImageDB } from '@/../database/types'

const initStores = async () => {
  await useAuthorStore().init()
  await useGalleryStore().init()
  await useImageStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const imageId = idString === 'first' ? useImageStore().getFirstId : parseInt(idString)

const selected = ref(0)
const imageOptions = [] as FormKitOptionsItem[]
let currentImageName: string
for (let i = 0; i < useImageStore().items.length; i++) {
  const item: Image = useImageStore().items[i] as Image
  imageOptions.push({ value: item.imageId, label: item.name })
  if (item.imageId === imageId) {
    selected.value = item.imageId
    currentImageName = item.name
  }
}

const save = async (image: ImageDB) => {
  await useUpdateItem(useImageStore().update, 'image', `/image/${imageId}`, image, imageId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/image/' + callback)
}
</script>

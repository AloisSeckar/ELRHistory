<template>
  <div>
    <ItemGallery :detail="true" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/database/types'

const item = computed(() => {
  let id = null
  try {
    const idString = useRoute().params.id as string
    id = parseInt(idString)
    return useGalleryStore().getById(id)
  } catch (ex) {
    console.error(`failed to fetch gallery '${id}': ${ex}`)
  }
  return {} as Gallery
})

onBeforeMount(async () => {
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

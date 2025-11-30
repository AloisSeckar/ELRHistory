<template>
  <div>
    <ItemGallery :detail="true" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/../database/types'

await useGalleryStore().init()
await useImageStore().init()

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

usePageMeta({
  title: item.value.name,
  dscr: item.value.dscr,
  // TODO use first image in gallery as og:image
  // image: item.value
})
</script>

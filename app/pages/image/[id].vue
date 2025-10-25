<template>
  <div>
    <ItemImage :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { Image } from '@/database/types'

await useImageStore().init()

const item = computed(() => {
  let id = null
  try {
    const idString = useRoute().params.id as string
    id = parseInt(idString)
    return useImageStore().getById(id)
  } catch (ex) {
    console.error(`failed to fetch image '${id}': ${ex}`)
  }
  return {} as Image
})
</script>

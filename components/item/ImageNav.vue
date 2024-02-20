<template>
  <div class="text-xl">
    <div v-if="editable" class="inline-block">
      <BaseIcon v-if="prevId" icon="backward" css-class="mx-4 text-green-500 hover:text-yellow-400" @click="moveBackwards" />
      <BaseIcon v-else icon="backward" css-class="mx-4 text-gray-400" />
    </div>

    <NuxtLink v-if="prevId" :to="{ path: '/image/' + prevId }" title="Previous">
      <BaseIcon icon="arrow-left" css-class="mx-1" />
    </NuxtLink>
    <BaseIcon v-else icon="arrow-left" css-class="mx-1 text-gray-400" />

    <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery?.galleryId }" title="Parent gallery">
      <BaseIcon icon="square" css-class="mx-1" />
    </NuxtLink>

    <NuxtLink v-if="nextId" :to="{ path: '/image/' + nextId }" title="Next">
      <BaseIcon icon="arrow-right" css-class="mx-1" />
    </NuxtLink>
    <BaseIcon v-else icon="arrow-right" css-class="mx-1 text-gray-400" />

    <div v-if="editable" class="inline-block">
      <BaseIcon v-if="nextId" icon="forward" css-class="mx-4 text-green-500 hover:text-yellow-400" @click="moveForwards" />
      <BaseIcon v-else icon="forward" css-class="mx-4 text-gray-400" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Image } from '@/database/types'

const props = defineProps({
  item: { type: Object as PropType<Image>, required: true },
  editable: { type: Boolean, default: false }
})

const prevId = computed(() => useImageStore().getPrev(props.item.imageId))
const nextId = computed(() => useImageStore().getNext(props.item.imageId))

function moveBackwards () {
  useImageStore().moveBackwards(props.item.imageId)
  return navigateTo(`/image/${props.item.imageId}`)
}

function moveForwards () {
  useImageStore().moveForwards(props.item.imageId)
  return navigateTo(`/image/${props.item.imageId}`)
}
</script>

<template>
  <div>
    <div
      id="map"
      class="mx-auto my-4 relative border border-black bg-cover overflow-hidden"
      :style="`background-image: url(${background})`">
      <NuxtLink v-for="location in items" :key="location.mapId" :to="`/gallery/${location.galleryId}`">
        <div
          class="p-2 rounded-full absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-navy opacity-40 cursor-pointer hover:bg-amber-200 hover:opacity-40 hover:border-2 hover:border-navy"
          :style="{
            width: `${location.diameter}px`,
            height: `${location.diameter}px`,
            left: `${location.coordX}px`,
            top: `${location.coordY}px`,
          }"
          :title="`${location.title} - ${location.dscr}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Map } from '@/../database/types'

const background = useRuntimeConfig().public.mapImage
const width = `${useRuntimeConfig().public.mapImageWidth}px`
const height = `${useRuntimeConfig().public.mapImageHeight}px`

const map = useMapStore()
await map.init()
const items = map.items as Map[]
</script>

<style scoped>
#map {
  width: v-bind('width');
  height: v-bind('height');
}
</style>

<template>
  <div>
    <div class="mx-auto my-4 w-[1000px] h-[600px] border border-black bg-[url(/map.jpg)]">
      <NuxtLink v-for="location in items" :key="location.mapId" :to="`/gallery/${location.galleryId}`">
        <div
          class="p-2 rounded-full relative -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex flex-col items-center bg-white opacity-25 cursor-pointer hover:bg-amber-100 hover:opacity-50"
          :style="{
            left: toUnit(location.coordX, 'px'),
            top: toUnit(location.coordY, 'px'),
          }"
          :title="`${location.title} - ${location.dscr}`" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Map } from '@/../database/types'

const map = useMapStore()
await map.init()
const items = map.items as Map[]

items[0]!.coordX = 520
items[0]!.coordY = 115

items[1]!.coordX = 470
items[1]!.coordY = 340

function toUnit(value: number, unit: 'px' | '%') {
  return `${value}${unit}`
}
</script>

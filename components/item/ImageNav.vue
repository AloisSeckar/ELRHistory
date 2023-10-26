<template>
  <div class="text-2xl">
    <div v-if="editable" class="inline-block">
      <NuxtLink v-if="item.prevId" :to="{ path: '/image/' + item.prevId }" title="Move image forward">
        <BaseIcon icon="backward" css-class="mx-4 text-green-500 hover:text-yellow-400" />
      </NuxtLink>
      <BaseIcon v-else icon="backward" css-class="mx-4 text-gray-400" />
    </div>

    <NuxtLink v-if="item.prevId" :to="{ path: '/image/' + item.prevId }" title="Previous">
      <BaseIcon icon="arrow-left" css-class="mx-1" />
    </NuxtLink>
    <BaseIcon v-else icon="arrow-left" css-class="mx-1 text-gray-400" />

    <NuxtLink :to="{ path: '/gallery/' + item.galleryId?.galleryId }" title="Parent gallery">
      <BaseIcon icon="square" css-class="mx-1" />
    </NuxtLink>

    <NuxtLink v-if="item.nextId" :to="{ path: '/image/' + item.nextId }" title="Next">
      <BaseIcon icon="arrow-right" css-class="mx-1" />
    </NuxtLink>
    <BaseIcon v-else icon="arrow-right" css-class="mx-1 text-gray-400" />

    <div v-if="editable" class="inline-block">
      <NuxtLink v-if="item.nextId" :to="{ path: '/image/' + item.nextId }" title="Next">
        <BaseIcon icon="forward" css-class="mx-4 text-green-500 hover:text-yellow-400" />
      </NuxtLink>
      <BaseIcon v-else icon="forward" css-class="mx-4 text-gray-400" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Image } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Image>, required: true },
  editable: { type: Boolean, default: false }
})
</script>

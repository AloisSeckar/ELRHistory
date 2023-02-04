<template>
  <div class="text-2xl">
    <div v-if="editable" class="inline-block">
      <NuxtLink v-if="item.prevId" :to="{ path: '/image/' + item.prevId }" title="Move image forward">
        <fa class="mx-4 text-green-500 hover:text-yellow-400" icon="backward" />
      </NuxtLink>
      <fa v-else class="mx-4 text-gray-400" icon="backward" />
    </div>

    <NuxtLink v-if="item.prevId" :to="{ path: '/image/' + item.prevId }" title="Previous">
      <fa class="mx-1" icon="arrow-left" />
    </NuxtLink>
    <fa v-else class="mx-1 text-gray-400" icon="arrow-left" />

    <NuxtLink :to="{ path: '/gallery/' + item.galleryId?.galleryId }" title="Parent gallery">
      <fa class="mx-1" icon="square" />
    </NuxtLink>

    <NuxtLink v-if="item.nextId" :to="{ path: '/image/' + item.nextId }" title="Next">
      <fa class="mx-1" icon="arrow-right" />
    </NuxtLink>
    <fa v-else class="mx-1 text-gray-400" icon="arrow-right" />

    <div v-if="editable" class="inline-block">
      <NuxtLink v-if="item.nextId" :to="{ path: '/image/' + item.nextId }" title="Next">
        <fa class="mx-4 text-green-500 hover:text-yellow-400" icon="forward" />
      </NuxtLink>
      <fa v-else class="mx-4 text-gray-400" icon="forward" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { Image } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Image>, required: true },
  editable: { type: Boolean, default: false }
})
</script>

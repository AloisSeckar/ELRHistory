<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <fa icon="image" />&nbsp;
        {{ item.name }}
        <div v-if="user" class="inline pl-2">
          <NuxtLink :to="{ path: '/admin/edit/image/' + item.imageId }">
            <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit image" />
          </NuxtLink>
        </div>
        <span class="float-right pr-1 text-base font-normal">
          <NuxtLink :to="{ path: '/gallery/' + item.galleryId?.galleryId }">
            <strong>{{ item.galleryId?.name }}</strong>
          </NuxtLink>|
          {{ item.elrhAuthor?.name }} |
          <em>{{ item.dateCreated?.split('T')[0] }}</em>
        </span>
      </div>
      <div class="box-content text-center">
        <div class="text-justify mb-2">
          {{ item.dscr }}
        </div>
        <hr class="mb-2">
        <ItemImageNav :item="item" :editable="editable" />
        <img class="m-2 inline-block max-w-[96%]" :src="item.image" :alt="item.name" :title="item.name">
        <ItemImageNav :item="item" :editable="editable" />
      </div>
    </div>
    <ItemInvalid v-else item="image" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { Image } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Image>, required: true }
})

const editable = computed(() => !!useLoginStore().user)
const user = computed(() => useLoginStore().user)
</script>

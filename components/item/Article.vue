<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <BaseIcon icon="cap" size="1.5rem" css-class="mb-1.5" />&nbsp;
        {{ item.name }}
        <AdminEditLink v-if="user" :link="'article/' + item.articleId" item="article" />
        <span class="float-right pr-1 text-base font-normal">
          <strong>{{ item.elrhCategory?.name }}</strong> | {{ item.elrhAuthor?.name }} |
          <em>{{ item.dateCreated?.split('T')[0] }}</em>
        </span>
      </div>
      <div class="box-content flex">
        <div class="flex-none pr-2">
          <img class="thumb" :src="item.thumb" :alt="item.name" :title="item.name">
        </div>
        <div class="flex-1">
          <div class="pb-1">
            {{ item.dscr }}
          </div>
          <div v-if="detail" class="pt-1" v-html="item.content" />
          <div v-else class="pt-1">
            [ <NuxtLink :to="{ path: '/article/' + item.articleId }">
              {{ text.getKey('article-read') }}
            </NuxtLink> ]
          </div>
          <div v-if="detail && item.elrhGallery" class="pt-1">
            [ <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery.galleryId }">
              {{ text.getKey('article-gallery') }}
            </NuxtLink> ]
          </div>
        </div>
      </div>
    </div>
    <ItemInvalid v-else item="article" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { Article } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Article>, required: true },
  detail: { type: Boolean, default: false }
})

const text = useTextStore()
const user = computed(() => useLoginStore().user)
</script>

<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <BaseIcon icon="cap" size="1.5rem" css-class="mb-1.5" />&nbsp;
        {{ item.name }}
        <AdminEditLink v-if="user" :link="'article/' + item.articleId" item="article" />
        <span class="float-right pr-1 text-base font-normal">
          <strong>{{ item.elrhCategory?.name }}</strong> | {{ item.elrhAuthor?.name }} |
          <em>{{ toDate(item.dateCreated) }}</em>
        </span>
      </div>
      <div class="box-content flex">
        <div class="flex-none pr-2">
          <NuxtImg preset="thumb" :src="item.thumb" :alt="item.name" :title="item.name" />
        </div>
        <div class="flex-1">
          <div class="pb-1">
            {{ item.dscr }}
          </div>
          <div v-if="detail" class="pt-1" v-html="item.content" />
          <div v-else class="pt-1">
            [ <NuxtLink :to="{ path: '/article/' + item.articleId }">
              {{ $t('articles.read') }}
            </NuxtLink> ]
          </div>
          <div v-if="detail && item.elrhGallery" class="pt-1">
            [ <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery.galleryId }">
              {{ $t('articles.gallery') }}
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

const user = computed(() => useLoginStore().user)
</script>

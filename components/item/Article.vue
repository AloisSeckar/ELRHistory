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
        <div class="flex-none pr-4">
          <NuxtImg preset="thumb" :src="item.thumb" :alt="item.name" :title="item.name" />
        </div>
        <div class="flex-1">
          <div :class="[detail ? 'pb-2 border-b-2 italic' : 'pb-1']">
            {{ item.dscr }}
          </div>
          <div v-if="detail" class="py-2" v-html="item.content" />
          <div v-else class="pt-1">
            [ <NuxtLink :to="{ path: '/article/' + item.articleId }">
              {{ $t('articles.read') }}
            </NuxtLink> ]
          </div>
          <div v-if="detail && item.elrhGallery" class="mt-2 pt-1 border-t-2">
            [ <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery.galleryId }">
              {{ $t('articles.gallery') }}
            </NuxtLink> ]
          </div>
        </div>
      </div>
    </div>
    <ItemInvalid v-else item="article" />
    <div v-if="detail" class="text-center m-[-12px]">
      <NuxtLink :to="{ path: '/articles' }">
        {{ $t('articles.back') }}
      </NuxtLink>
    </div>
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

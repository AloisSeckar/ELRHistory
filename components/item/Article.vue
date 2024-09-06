<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <span class="flex-1 mr-4 px-1">
          <BaseIcon class="hidden lg:inline-block" icon="cap" size="1.5rem" css-class="mb-1.5 mr-2" />
          <NuxtLink :to="{ path: articlePath }">
            <h2 class="inline">
              {{ item.name }}
            </h2>
          </NuxtLink>
          <AdminEditLink v-if="user" :link="articlePath.slice(1)" item="article" />
        </span>
        <span class="float-right mt-1 px-1 text-base font-normal">
          <NuxtLink to="/articles">
            <strong>{{ item.elrhCategory?.name }}</strong>
          </NuxtLink>
          | {{ item.elrhAuthor?.name }} |
          <em>{{ toDate(item.dateCreated) }}</em>
        </span>
      </div>
      <div class="box-content flex flex-col sm:flex-row">
        <div v-if="!detail" class="block sm:inline-block sm:w-44 p-2">
          <BaseThumb :name="item.name" :image="item.thumb" :link="articlePath" landscape />
        </div>
        <div class="flex-1">
          <div :class="[detail ? 'w-full pb-2 border-b-2 italic flex flex-col sm:flex-row' : 'pb-1']">
            <div v-if="detail" class="w-52 p-2 flex-none">
              <NuxtImg
                class="mx-auto w-48 h-36 mr-4 border"
                provider="cloudinary" :src="useRuntimeConfig().public.cloudinary.folder + item.thumb"
                :alt="item.name" :title="item.name" />
            </div>
            <div class="sm:pt-2">
              {{ item.dscr }}
            </div>
          </div>
          <div class="html-content">
            <div v-if="detail" v-dompurify-html="item.content" class="py-2" />
            <div v-else class="pt-1">
              [&nbsp;<NuxtLink :to="{ path: articlePath }">
                {{ $t('articles.read') }}
              </NuxtLink>&nbsp;]
            </div>
            <div v-if="detail && item.elrhGallery" class="mt-2 pt-1 border-t-2">
              [&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.elrhGallery.galleryId }">
                {{ $t('articles.gallery') }}
              </NuxtLink>&nbsp;]
            </div>
          </div>
        </div>
      </div>
    </div>
    <ItemInvalid v-else item="article" />
    <div v-if="detail" class="m-[-12px] text-center">
      <NuxtLink :to="{ path: '/articles' }" class="hover:text-sky-500">
        {{ $t('articles.back') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Article } from '@/database/types'

const props = defineProps({
  item: { type: Object as PropType<Article>, required: true },
  detail: { type: Boolean, default: false },
})

const user = computed(() => useLoginStore().user)
const articlePath = '/article/' + props.item.articleId
</script>

<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <span class="flex-1 mr-4 px-1">
          <BaseIcon class="hidden lg:inline-block" icon="image" size="1.125rem" css-class="mb-1.5 mr-2" />
          <h2 class="inline">
            {{ item.name }}
          </h2>
          <AdminEditLink v-if="user" :link="'image/' + item.imageId" item="image" />
        </span>
        <span class="float-right mt-1 px-1 text-base font-normal">
          <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery?.galleryId }">
            <strong>{{ item.elrhGallery?.name }}</strong>
          </NuxtLink> |
          {{ item.elrhAuthor?.name }} |
          <em>{{ toDate(item.dateCreated) }}</em>
        </span>
      </div>
      <div class="box-content text-center">
        <div class="text-left sm:text-justify">
          <div v-if="item.dscr" v-dompurify-html="item.dscr" class="mb-2 html-content" />
          <div v-else class="mb-2 italic">
            {{ $t('images.no-dscr') }}
          </div>
        </div>
        <hr class="mb-2">
        <ItemImageNav :item="item" :editable="editable" />
        <div class="mx-2 sm:mx-auto sm:max-w-[80%] lg:max-w-[60%]">
          <NuxtLink
            :to="useRuntimeConfig().public.cloudinary.baseURL + useRuntimeConfig().public.cloudinary.folder + item.image"
            :external="true" target="_blank">
            <NuxtImg
              class="my-2 inline-block w-full h-auto border"
              provider="cloudinary" :src="useRuntimeConfig().public.cloudinary.folder + item.image"
              :alt="item.name" :title="useT('images.full-size')" />
          </NuxtLink>
        </div>
        <ItemImageNav :item="item" :editable="editable" />
      </div>
    </div>
    <ItemInvalid v-else item="image" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Image } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Image>, required: true },
})

const editable = computed(() => !!useLoginStore().user)
const user = computed(() => useLoginStore().user)
</script>

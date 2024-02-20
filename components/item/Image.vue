<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <BaseIcon icon="image" size="1.125rem" css-class="mb-1.5" />&nbsp;
        {{ item.name }}
        <AdminEditLink v-if="user" :link="'image/' + item.imageId" item="image" />
        <span class="float-right pr-1 text-base font-normal">
          <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery?.galleryId }">
            <strong>{{ item.elrhGallery?.name }}</strong>
          </NuxtLink> |
          {{ item.elrhAuthor?.name }} |
          <em>{{ toDate(item.dateCreated) }}</em>
        </span>
      </div>
      <div class="box-content text-center">
        <div v-if="item.dscr" class="mb-2 text-justify html-content" v-html="item.dscr" />
        <div v-else class="text-justify mb-2 italic">
          {{ $t('images.no-dscr') }}
        </div>
        <hr class="mb-2">
        <ItemImageNav :item="item" :editable="editable" />
        <div class="mx-auto max-w-[60%]">
          <NuxtLink
            :to="useRuntimeConfig().public.cloudinary.baseURL + useRuntimeConfig().public.cloudinary.folder + item.image"
            :external="true"
            target="_blank"
          >
            <NuxtImg
              class="my-2 inline-block w-full h-auto border"
              provider="cloudinary"
              :src="useRuntimeConfig().public.cloudinary.folder + item.image"
              :alt="item.name"
              :title="useT('images.full-size')"
            />
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
  item: { type: Object as PropType<Image>, required: true }
})

const editable = computed(() => !!useLoginStore().user)
const user = computed(() => useLoginStore().user)
</script>

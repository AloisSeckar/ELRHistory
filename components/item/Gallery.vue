<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <span class="flex-1 mr-4 px-1">
          <BaseIcon class="hidden lg:inline-block" icon="image" size="1.125rem" css-class="mb-1.5 mr-2" />
          <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
            <h2 class="inline">
              {{ item.name }}
            </h2>
          </NuxtLink>
          <AdminEditLink v-if="user" :link="'gallery/' + item.galleryId" item="gallery" />
        </span>
        <span class="float-right mt-1 px-1 text-base font-normal">
          <NuxtLink :to="{ path: parent?.galleryId > 0 ? '/gallery/' + parent?.galleryId : '/galleries' }">
            <strong>{{ parent?.name ? parent.name : 'Index' }}</strong>
          </NuxtLink>
          | {{ item.elrhAuthor?.name }} |
          <em>{{ toDate(item.dateCreated) }}</em>
        </span>
      </div>
      <div class="box-content html-content">
        <div v-if="detail" v-dompurify-html="item.dscr" />
        <div v-else>
          <span v-if="longDscr" v-dompurify-html="item.dscr?.substring(0, 200) + '...'" />
          <span v-else v-dompurify-html="item.dscr" />
          <span v-if="longDscr">
            [&nbsp;<NuxtLink v-if="longDscr" :to="{ path: '/gallery/' + item.galleryId }">
              {{ $t('galleries.read-more') }}</NuxtLink>&nbsp;]
          </span>
        </div>
        <div>
          <h3>{{ $t('galleries.images') }}</h3>
          <div class="flex flex-wrap">
            <div v-for="image in thumbs" :key="image.imageId">
              <NuxtLink :to="{ path: '/image/' + image.imageId }">
                <NuxtImg
                  class="m-1 w-40 h-24 border"
                  provider="cloudinary" :src="useRuntimeConfig().public.cloudinary.folder + image.image"
                  :alt="image.name" :title="image.name" />
              </NuxtLink>
            </div>
            <div v-if="(!detail && images > 5)" class="m-1 leading-6">
              <br>
              [&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
                {{ $t('galleries.see-more') }}
              </NuxtLink>&nbsp;]
            </div>
          </div>
        </div>
        <div>
          <span v-if="images > 0">
            {{ $t('galleries.images-count-1') }}
            <strong>{{ $t('galleries.images-count-2', images) }}</strong>
          </span>
          <span v-else>
            {{ $t('galleries.images-none') }}
          </span>
          <span v-if="!detail">
            [&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
              {{ $t('galleries.images-view') }}</NuxtLink>&nbsp;]
          </span>
        </div>
        <div v-if="detail">
          <h3>{{ $t('galleries.parent') }}</h3>
          <div v-if="item.parentId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.parentId.galleryId }">
              {{ item.parentId.name }}
            </NuxtLink>
          </div>
          <div v-else>
            &#9656;&nbsp;<NuxtLink :to="{ path: '/galleries' }">
              {{ $t('galleries.parent-index') }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <h3>{{ $t('galleries.sub') }}</h3>
          <div v-for="gallery in children" :key="gallery.galleryId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + gallery.galleryId }">
              {{ gallery.name }}
            </NuxtLink>
          </div>
          <div v-if="children.length === 0">
            {{ $t('galleries.sub-none') }}
          </div>
        </div>
        <div>
          <h3>{{ $t('galleries.articles') }}</h3>
          <div v-for="article in articles" :key="article.articleId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/article/' + article.articleId }">
              {{ article.name }}
            </NuxtLink> [ {{ article.elrhAuthor?.name }} ]<br>
          </div>
          <div v-if="articles ? articles.length === 0 : true">
            {{ $t('galleries.articles-none') }}
          </div>
        </div>
      </div>
    </div>
    <ItemInvalid v-else item="gallery" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Gallery } from '@/database/types'

const props = defineProps({
  detail: { type: Boolean, default: false },
  item: { type: Object as PropType<Gallery>, required: true },
})

const user = computed(() => useLoginStore().user)

const images = computed(() => useImageStore().getCountByGallery(props.item.galleryId))
const thumbs = computed(() => useImageStore().getByGallery(props.item.galleryId, props.detail ? undefined : 5))
const children = computed(() => useGalleryStore().getByParent(props.item.galleryId))
const parent = computed(() => useGalleryStore().getById(props.item.parentId?.galleryId || 0))
const articles = computed(() => props.item.elrhArticle)
const longDscr = computed(() => props.item.dscr ? props.item.dscr.length > 200 : false)
</script>

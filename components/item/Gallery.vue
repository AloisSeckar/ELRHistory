<template>
  <div>
    <div v-if="item.name" class="box">
      <div class="box-header">
        <BaseIcon icon="image" size="1.125rem" css-class="mb-1.5" />&nbsp;
        <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
          {{ item.name }}
        </NuxtLink>
        <div v-if="user" class="inline pl-2">
          <NuxtLink :to="{ path: '/admin/edit/gallery/' + item.galleryId }">
            <span title="Edit gallery">
              <BaseIcon icon="wrench" size="1.875rem" css-class="text-green-500 hover:text-yellow-400" />
            </span>
          </NuxtLink>
        </div>
        <span class="float-right pr-1 text-base font-normal">
          <strong>{{ parent ? parent : 'Index' }}</strong> | {{ item.elrhAuthor?.name }} |
          <em>{{ item.dateCreated?.split('T')[0] }}</em>
        </span>
      </div>
      <div class="box-content">
        <div v-if="detail" v-html="item.dscr" />
        <div v-else>
          <span v-if="longDscr" v-html="item.dscr?.substring(0, 200) + '...'" />
          <span v-else v-html="item.dscr" />
          <span v-if="longDscr">
            [ <NuxtLink v-if="longDscr" :to="{ path: '/gallery/' + item.galleryId }">
              {{ text.getKey('gallery-read-more') }}</NuxtLink> ]
          </span>
        </div>
        <div>
          <strong>{{ text.getKey('gallery-images') }}</strong>
          <div class="flex flex-wrap">
            <div v-for="image in thumbs" :key="image.imageId">
              <NuxtLink :to="{ path: '/image/' + image.imageId }">
                <img class="thumb" :src="image.image" :alt="image.name" :title="image.name">
              </NuxtLink>
            </div>
            <div v-if="(!detail && images > 5)" class="thumb leading-6">
              <br>
              [ <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
                {{ text.getKey('gallery-see-more') }}
              </NuxtLink> ]
            </div>
          </div>
        </div>
        <div>
          <span v-if="images > 0">
            {{ text.getKey('gallery-images-1') }}
            <strong>{{ useImageStore().getCountByGallery(item.galleryId) }}</strong>
            {{ text.getKey('gallery-images-2') }}
          </span>
          <span v-else>
            {{ text.getKey('gallery-images-none') }}
          </span>
          <span v-if="!detail">
            [ <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
              {{ text.getKey('gallery-images-view') }}</NuxtLink> ]
          </span>
        </div>
        <div v-if="detail">
          <strong>{{ text.getKey('gallery-parent') }}</strong>
          <div v-if="item.parentId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.parentId.galleryId }">
              {{ item.parentId.name }}
            </NuxtLink>
          </div>
          <div v-else>
            &#9656;&nbsp;<NuxtLink :to="{ path: '/galleries' }">
              {{ text.getKey('gallery-parent-index') }}
            </NuxtLink>
          </div>
        </div>
        <div>
          <strong>{{ text.getKey('gallery-sub') }}</strong>
          <div v-for="gallery in children" :key="gallery.galleryId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + gallery.galleryId }">
              {{ gallery.name }}
            </NuxtLink>
          </div>
          <div v-if="children.length === 0">
            {{ text.getKey('gallery-sub-none') }}
          </div>
        </div>
        <div>
          <strong>{{ text.getKey('gallery-articles') }}</strong>
          <div v-for="article in articles" :key="article.articleId">
            &#9656;&nbsp;<NuxtLink :to="{ path: '/article/' + article.articleId }">
              {{ article.name }}
            </NuxtLink> [ {{ article.elrhAuthor?.name }} ]<br>
          </div>
          <div v-if="articles ? articles.length === 0 : true">
            {{ text.getKey('gallery-articles-none') }}
          </div>
        </div>
      </div>
    </div>
    <ItemInvalid v-else item="gallery" />
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import type { Gallery } from '@/database/types'

const props = defineProps({
  detail: { type: Boolean, default: false },
  item: { type: Object as PropType<Gallery>, required: true }
})

const text = useTextStore()
const user = computed(() => useLoginStore().user)

const id = ref(props.item.galleryId)
const images = computed(() => useImageStore().getCountByGallery(id.value))
const thumbs = computed(() => useImageStore().getByGallery(id.value, props.detail ? undefined : 5))
const children = computed(() => useGalleryStore().getByParent(id.value))
const parent = computed(() => 'Index') // TODO
const articles = computed(() => props.item.elrhArticle)
const longDscr = computed(() => props.item.dscr ? props.item.dscr.length > 200 : false)
</script>

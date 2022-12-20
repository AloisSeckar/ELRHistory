<template>
  <div>
    <TheHeader />
    <TheMenu />
    <h1 class="ml-32 mb-2 font-bold text-4xl text-navy">
      {{ title }}
      <div class="inline text-3xl text-green-500 hover:text-yellow-400" v-if="adminLink">
        <NuxtLink :to="{ path: '/admin/add/' + adminLink.link }">
          <fa icon="plus" :title="adminLink.text" />
        </NuxtLink>
      </div>
    </h1>
    <div class="mx-32 mb-12">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'

const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.textTitle
useHead({
  title: title,
  bodyAttrs: {
    id: 'main',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ]
})

// datastore ("dumb" loading)
// TODO improve
// TODO also there is a problem that gallery info doesn't load on time 
//   when starting directly at /gallery/[id]
await useTextStore().fill()
await useContactStore().fill()
await useNewsStore().fill()
await useCategoryStore().fill()
await useArticleStore().fill()
await useBookStore().fill()
await useGalleryStore().fill()
await useImageStore().fill()
await useLinkStore().fill()

// TODO make component for displaying title
const adminLink = computed(() => {
  if (useLoginStore().user) {
    if (useRoute().path.includes('article')) {
      return {
        link: 'article',
        text: 'Add article',
      }
    } else if (useRoute().path.includes('galler')) {
      return {
        link: 'gallery',
        text: 'Add gallery',
      }
    } else if (useRoute().path.includes('image')) {
      return {
        link: 'image',
        text: 'Add image',
      }
    } else if (useRoute().path.includes('book')) {
      return {
        link: 'book',
        text: 'Add book',
      }
    } else if (useRoute().path.includes('link')) {
      return {
        link: 'link',
        text: 'Add link',
      }
    } 
  } else {
    return null
  }
})
</script>

<template>
  <div>
    <TheModal v-show="useModalStore().show" />
    <TheHeader />
    <TheMenu />
    <TheTitle />
    <div class="mx-32 mb-12">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'

useHead({
  title: useRuntimeConfig().public.textTitle,
  bodyAttrs: {
    id: 'main'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
  ]
})

// datastore ("dumb" loading)
// TODO improve
// TODO also there is a problem that gallery info doesn't load on time
//   when starting directly at /gallery/[id]
await useAuthorStore().fill()
await useContactStore().fill()
await useNewsStore().fill()
await useCategoryStore().fill()
await useArticleStore().fill()
await useBookStore().fill()
await useGalleryStore().fill()
await useImageStore().fill()
await useLinkStore().fill()

</script>

<style>
.formkit-input {
    /* otherwise style from tailwind.css is ignored */
    /* TODO study and apply https://formkit.com/guides/create-a-tailwind-theme */
    display: inline-block;
}
</style>

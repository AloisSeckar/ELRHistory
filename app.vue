<template>
  <div>
    <TheModal v-show="useModalStore().show" />
    <TheHeader />
    <TheMenu />
    <TheTitle />
    <div class="mx-2 md:mx-8 lg:mx-16 xl:mx-32 mb-12">
      <NuxtPage />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import './assets/css/tailwind.css'
import { changeLocale } from '@formkit/vue'

useHead({
  title: useRuntimeConfig().public.webTitle,
  htmlAttrs: {
    lang: useRuntimeConfig().public.lang,
  },
  bodyAttrs: {
    id: 'main',
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
})

await useAdminStore().load()

onMounted(() => {
  changeLocale(useRuntimeConfig().public.lang)
})
</script>

<style>
.formkit-input {
    /* otherwise style from tailwind.css is ignored */
    /* TODO study and apply https://formkit.com/guides/create-a-tailwind-theme */
    display: inline-block;
}
</style>

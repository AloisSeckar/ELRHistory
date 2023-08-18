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
</script>

<style>
.formkit-input {
    /* otherwise style from tailwind.css is ignored */
    /* TODO study and apply https://formkit.com/guides/create-a-tailwind-theme */
    display: inline-block;
}
</style>

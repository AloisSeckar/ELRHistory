<template>
  <div>
    <TheHeader />
    <TheMenu />
    <h1 class="ml-32 mb-2 font-bold text-4xl text-navy">{{ title }}</h1>
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
</script>

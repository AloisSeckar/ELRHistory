<template>
  <a :href="link" :title="name">
    <NuxtImg
      class="sm:mx-auto border" :class="landscape ? 'w-40 h-28' : 'w-28 h-36'"
      provider="cloudinary" :src="useRuntimeConfig().public.cloudinary.folder + image"
      :alt="name" :title="name" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  name: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
  landscape: { type: Boolean, default: false },
})
</script>

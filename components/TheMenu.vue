<template>
  <div class="py-1 bg-navy text-lg text-silver text-center space-x-8">
    <NuxtLink to="/">
      <BaseIcon icon="home" size="1.5rem" css-class="mb-1.5" /> {{ text.getKey('menu-index') }}
    </NuxtLink>
    <NuxtLink to="/articles">
      <BaseIcon icon="cap" size="1.5rem" css-class="mb-1.5" /> {{ text.getKey('menu-articles') }}
    </NuxtLink>
    <NuxtLink to="/galleries">
      <BaseIcon icon="image" size="1.125rem" css-class="mb-1.5" /> {{ text.getKey('menu-galleries') }}
    </NuxtLink>
    <NuxtLink to="/books">
      <BaseIcon icon="book" size="1.5rem" css-class="mb-1.5" /> {{ text.getKey('menu-books') }}
    </NuxtLink>
    <NuxtLink to="/links">
      <BaseIcon icon="globe" size="1.125rem" css-class="mb-1.5" /> {{ text.getKey('menu-links') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

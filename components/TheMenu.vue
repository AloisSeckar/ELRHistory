<template>
  <div class="py-1 bg-navy text-lg text-silver text-center space-x-8">
    <NuxtLink to="/">
      <fa icon="home" /> {{ text.getKey('menu-index') }}
    </NuxtLink>
    <NuxtLink to="/articles">
      <fa icon="graduation-cap" /> {{ text.getKey('menu-articles') }}
    </NuxtLink>
    <NuxtLink to="/galleries">
      <fa icon="image" /> {{ text.getKey('menu-galleries') }}
    </NuxtLink>
    <NuxtLink to="/books">
      <fa icon="book" /> {{ text.getKey('menu-books') }}
    </NuxtLink>
    <NuxtLink to="/links">
      <fa icon="globe" /> {{ text.getKey('menu-links') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

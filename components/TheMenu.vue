<template>
  <div class="px-4 py-1 bg-navy text-lg text-silver text-center space-x-8">
    <NuxtLink to="/" class="">
      <BaseIcon icon="home" size="1.5rem" :css-class="menuIcon" /> {{ $t('menu.index') }}
    </NuxtLink>
    <NuxtLink to="/articles">
      <BaseIcon icon="cap" size="1.5rem" :css-class="menuIcon" /> {{ $t('menu.articles') }}
    </NuxtLink>
    <NuxtLink to="/galleries">
      <BaseIcon icon="image" size="1.125rem" :css-class="menuIcon" /> {{ $t('menu.galleries') }}
    </NuxtLink>
    <NuxtLink to="/timeline" class="text-nowrap">
      <BaseIcon icon="timeline" size="1.125rem" :css-class="menuIcon" /> {{ $t('menu.timeline') }}
    </NuxtLink>
    <NuxtLink to="/books">
      <BaseIcon icon="book" size="1.5rem" :css-class="menuIcon" /> {{ $t('menu.books') }}
    </NuxtLink>
    <NuxtLink to="/links">
      <BaseIcon icon="globe" size="1.125rem" :css-class="menuIcon" /> {{ $t('menu.links') }}
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const menuIcon = 'mb-1.5 hidden md:inline-block'
</script>

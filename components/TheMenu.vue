<template>
  <div class="py-1 bg-navy text-lg text-silver text-center space-x-8">
    <NuxtLink to="/">
      <BaseIcon icon="home" size="1.5rem" css-class="mb-1.5" /> {{ $t('menu.index') }}
    </NuxtLink>
    <NuxtLink to="/articles">
      <BaseIcon icon="cap" size="1.5rem" css-class="mb-1.5" /> {{ $t('menu.articles') }}
    </NuxtLink>
    <NuxtLink to="/galleries">
      <BaseIcon icon="image" size="1.125rem" css-class="mb-1.5" /> {{ $t('menu.galleries') }}
    </NuxtLink>
    <NuxtLink to="/books">
      <BaseIcon icon="book" size="1.5rem" css-class="mb-1.5" /> {{ $t('menu.books') }}
    </NuxtLink>
    <NuxtLink to="/links">
      <BaseIcon icon="globe" size="1.125rem" css-class="mb-1.5" /> {{ $t('menu.links') }}
    </NuxtLink>
  </div>
</template>

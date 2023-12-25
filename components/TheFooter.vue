<template>
  <div class="fixed bottom-0 h-10 w-full pt-1 bg-navy text-center text-sm text-silver">
    © {{ year }} <strong>{{ title }}</strong> by
    <NuxtLink :to="useRuntimeConfig().public.footerLink" extrnal no-prefetch>
      {{ useRuntimeConfig().public.footerAuthor }}
    </NuxtLink>
    powered by
    <NuxtLink to="https://nuxt.com/">
      Nuxt3
    </NuxtLink>
    |
    <span class="pl-1 text-xs">
      <NuxtLink to="/admin">
        <BaseIcon icon="key" size="1rem" />
      </NuxtLink>
      <div v-if="user" class="inline">
        &nbsp;{{ user }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
const title = useRuntimeConfig().public.webTitle
const year = new Date().getFullYear()
const user = computed(() => useLoginStore().user)
</script>

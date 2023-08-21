<template>
  <div class="fixed bottom-0 w-full py-1 bg-navy text-center text-sm text-silver">
    © {{ year }} <strong>{{ title }}</strong> by <span v-html="$t('web.author')" />
    powered by <a href="https://nuxt.com/">Nuxt3</a>
    |
    <span class="pl-1 text-xs">
      <NuxtLink to="/login">
        <BaseIcon icon="key" size="1rem" />
      </NuxtLink>
      <div v-if="user" class="inline">
        &nbsp;{{ user }}
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
const title = useAppConfig().textTitle
const year = new Date().getFullYear()
const user = computed(() => useLoginStore().user)
</script>

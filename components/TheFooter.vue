<template>
    <div class="fixed bottom-0 w-full py-1 bg-navy text-center text-sm text-silver">
        © {{ year }} <strong>{{ title }}</strong> by 
        <a v-show="website" :href="website">{{ author }}</a>
        <span v-show="!website">>{{ author }}</span>
        powered by <a href="https://v3.nuxtjs.org/">Nuxt3</a>
        | <span class="text-xs"><NuxtLink to="/login"><fa icon="key" /></NuxtLink></span>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const title = runtimeConfig.public.textTitle
const author = runtimeConfig.public.textAuthorName
const website = runtimeConfig.public.textAuthorWebsite
const year = new Date().getFullYear()
</script>

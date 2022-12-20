<template>
    <div class="fixed bottom-0 w-full py-1 bg-navy text-center text-sm text-silver">
        © {{ year }} <strong>{{ title }}</strong> by <span v-html="author"></span>
        powered by <a href="https://nuxt.com/">Nuxt3</a>
        | 
        <span class="text-xs">
            <NuxtLink to="/login">
                <fa icon="key" />
            </NuxtLink>
            <div class="inline" v-if="user">
                &nbsp;{{ user }}
            </div>
        </span>
    </div>
</template>

<script setup lang="ts">
const title = useRuntimeConfig().public.textTitle
const author = computed(() => useTextStore().getKey('web-author'))
console.log(author.value)
const year = new Date().getFullYear()
const user = computed(() => useLoginStore().user)
</script>

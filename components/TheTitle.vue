<template>
    <h1 class="ml-32 mb-2 font-bold text-4xl text-navy">
      {{ title }}
      <div class="inline text-3xl text-green-500 hover:text-yellow-400" v-if="adminLink">
        <NuxtLink :to="{ path: '/admin/add/' + adminLink.link }">
          <fa icon="plus" :title="adminLink.text" />
        </NuxtLink>
      </div>
    </h1>
</template>

<script setup lang="ts">
const title = useRuntimeConfig().public.textTitle

const adminLink = computed(() => {
  if (useLoginStore().user) {
    if (useRoute().path.includes('article')) {
      return {
        link: 'article',
        text: 'Add article',
      }
    } else if (useRoute().path.includes('galler')) {
      return {
        link: 'gallery',
        text: 'Add gallery',
      }
    } else if (useRoute().path.includes('image')) {
      return {
        link: 'image',
        text: 'Add image',
      }
    } else if (useRoute().path.includes('book')) {
      return {
        link: 'book',
        text: 'Add book',
      }
    } else if (useRoute().path.includes('link')) {
      return {
        link: 'link',
        text: 'Add link',
      }
    } 
  } else {
    return null
  }
})
</script>
<template>
  <h1 class="ml-32 mb-2 font-bold text-4xl text-navy">
    {{ baseTitle + (titleData.page ? " - " + titleData.page : "") }}
    <div v-if="useLoginStore().user && titleData.link" class="inline text-3xl text-green-500 hover:text-yellow-400">
      <NuxtLink :to="{ path: '/admin/add/' + titleData.link }" :title="titleData.text">
        <BaseIcon icon="plus" size="3rem" css-class="mb-2" />
      </NuxtLink>
    </div>
  </h1>
</template>

<script setup lang="ts">
const baseTitle = useRuntimeConfig().public.webTitle

const titleData = computed(() => {
  if (useRoute().path.includes('article')) {
    return {
      link: 'article',
      page: useT('menu.articles'),
      text: useT('admin.add.article')
    }
  } else if (useRoute().path.includes('galler')) {
    return {
      link: 'gallery',
      page: useT('menu.galleries'),
      text: useT('admin.add.gallery')
    }
  } else if (useRoute().path.includes('image')) {
    return {
      link: 'image',
      page: useT('images.title'),
      text: useT('admin.add.image')
    }
  } else if (useRoute().path.includes('book')) {
    return {
      link: 'book',
      page: useT('menu.books'),
      text: useT('admin.add.book')
    }
  } else if (useRoute().path.includes('link')) {
    return {
      link: 'link',
      page: useT('menu.links'),
      text: useT('admin.add.link')
    }
  } else if (useRoute().path.includes('news')) {
    return {
      link: 'news',
      page: useT('news.title'),
      text: useT('admin.add.news')
    }
  } else if (useRoute().path.includes('timeline')) {
    return {
      link: 'timeline',
      page: useT('menu.timeline'),
      text: useT('admin.add.timeline')
    }
  } else if (useRoute().path.includes('admin')) {
    return {
      page: useT('admin.index')
    }
  } else {
    return {}
  }
})
</script>

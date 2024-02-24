<template>
  <h1 class="ml-2 md:ml-8 lg:ml-16 xl:ml-32 font-bold text-2xl text-navy">
    {{ baseTitle + (titleData.page ? " - " + titleData.page : "") }}
    <div v-if="useLoginStore().user && titleData.link" class="inline text-xl text-green-500 hover:text-yellow-400">
      <NuxtLink :to="{ path: '/admin/add/' + titleData.link }" :title="titleData.text">
        <BaseIcon icon="plus" size="3rem" />
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
      text: useTAdminAdd('article')
    }
  } else if (useRoute().path.includes('galler')) {
    return {
      link: 'gallery',
      page: useT('menu.galleries'),
      text: useTAdminAdd('gallery')
    }
  } else if (useRoute().path.includes('image')) {
    return {
      link: 'image',
      page: useT('images.title'),
      text: useTAdminAdd('image')
    }
  } else if (useRoute().path.includes('book')) {
    return {
      link: 'book',
      page: useT('menu.books'),
      text: useTAdminAdd('book')
    }
  } else if (useRoute().path.includes('link')) {
    return {
      link: 'link',
      page: useT('menu.links'),
      text: useTAdminAdd('link')
    }
  } else if (useRoute().path.includes('news')) {
    return {
      link: 'news',
      page: useT('news.title'),
      text: useTAdminAdd('news')
    }
  } else if (useRoute().path.includes('timeline')) {
    return {
      link: 'timeline',
      page: useT('menu.timeline'),
      text: useTAdminAdd('timeline')
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

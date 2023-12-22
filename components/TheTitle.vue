<template>
  <h1 class="ml-32 mb-2 font-bold text-4xl text-navy">
    {{ baseTitle + (titleData.page ? " - " + titleData.page : "") }}
    <div v-if="useLoginStore().user && titleData.link" class="inline text-3xl text-green-500 hover:text-yellow-400">
      <NuxtLink :to="{ path: '/admin/add/' + titleData.link }">
        <BaseIcon icon="plus" size="3rem" css-class="mb-2" />
      </NuxtLink>
    </div>
  </h1>
</template>

<script setup lang="ts">
const baseTitle = useAppConfig().textTitle

// TODO i18n translate
const titleData = computed(() => {
  if (useRoute().path.includes('article')) {
    return {
      page: 'Articles',
      link: 'article',
      text: 'Add article'
    }
  } else if (useRoute().path.includes('galler')) {
    return {
      page: 'Galleries',
      link: 'gallery',
      text: 'Add gallery'
    }
  } else if (useRoute().path.includes('image')) {
    return {
      page: 'Images',
      link: 'image',
      text: 'Add image'
    }
  } else if (useRoute().path.includes('book')) {
    return {
      page: 'Books',
      link: 'book',
      text: 'Add book'
    }
  } else if (useRoute().path.includes('link')) {
    return {
      page: 'Links',
      link: 'link',
      text: 'Add link'
    }
  } else if (useRoute().path.includes('news')) {
    return {
      page: 'News',
      link: 'news',
      text: 'Add news'
    }
  } else if (useRoute().path.includes('timeline')) {
    return {
      page: 'Timeline',
      link: 'timeline',
      text: 'Add timeline item'
    }
  } else if (useRoute().path.includes('admin')) {
    return {
      page: 'Administration'
    }
  } else {
    return {}
  }
})
</script>

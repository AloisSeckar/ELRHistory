<template>
  <div>
    <ItemArticle :item="item" :detail="true" />
  </div>
</template>

<script setup lang="ts">
import type { Article } from '@/../database/types'

await useArticleStore().init()

const item = computed(() => {
  let id = null
  try {
    const idString = useRoute().params.id as string
    id = parseInt(idString)
    return useArticleStore().getById(id)
  } catch (ex) {
    console.error(`failed to fetch article '${id}': ${ex}`)
  }
  return {} as Article
})

usePageMeta({
  title: item.value.name,
  dscr: item.value.dscr,
  image: item.value.thumb,
})
</script>

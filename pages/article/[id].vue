<template>
  <div>
    <ItemArticle :item="item" :detail="true" />
  </div>
</template>

<script setup lang="ts">
import { Article } from '@/database/types'

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

onBeforeMount(async () => {
  await useArticleStore().fill()
})
</script>

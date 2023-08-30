<template>
  <div>
    <h1>Add news</h1>
    <AdminFormNews :news-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { NewsDB } from '@/database/types'

const save = async (news: NewsDB) => {
  await useUpdateItem(useNewsStore(), 'news', '/news', news)
}

onBeforeMount(async () => {
  await useNewsStore().init()
  await useAuthorStore().init()
  await useCategoryStore().init()
})
</script>

<template>
  <div>
    <h1>Add news</h1>
    <AdminFormNews :news-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import { NewsDB } from '@/database/types'

const save = async (news: NewsDB) => {
  const result = await useNewsStore().update(JSON.parse(JSON.stringify(news)))
  if (result) {
    useModalStore().showModal('Item saved', 'News was successfully created')
    return navigateTo('/news')
  } else {
    useModalStore().showModal('Error', "News wasn't created")
  }
}

onBeforeMount(async () => {
  await useNewsStore().fill()
  await useAuthorStore().fill()
  await useCategoryStore().fill()
})
</script>

<template>
  <div>
    <h2>{{ useTAdminAdd('news') }}</h2>
    <AdminFormNews :news-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { NewsDB } from '@/database/types'

await useNewsStore().init()
await useAuthorStore().init()
await useCategoryStore().init()

const save = async (news: NewsDB) => {
  await useUpdateItem(useNewsStore().update, 'news', '/news', news)
}
</script>

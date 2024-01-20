<template>
  <div>
    <h2>{{ useTAdminAdd('link') }}</h2>
    <AdminFormLink :link-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { LinkDB } from '@/database/types'

await useLinkStore().init()
await useAuthorStore().init()
await useCategoryStore().init()

const save = async (link: LinkDB) => {
  await useUpdateItem(useLinkStore(), 'link', '/links', link)
}
</script>

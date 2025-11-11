<template>
  <div>
    <h2>{{ useTAdminAdd('timeline') }}</h2>
    <AdminFormTimeline :timeline-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { TimelineDB } from '@/../database/types'

await useAuthorStore().init()
await useTimelineStore().init()

const save = async (timeline: TimelineDB) => {
  await useUpdateItem(useTimelineStore().update, 'timeline', '/timeline', timeline)
}
</script>

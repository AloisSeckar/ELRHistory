<template>
  <div>
    <h2>Add timeline item</h2>
    <AdminFormTimeline :timeline-id="-1" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { TimelineDB } from '@/database/types'

const save = async (timeline: TimelineDB) => {
  await useUpdateItem(useTimelineStore(), 'timeline', '/timeline', timeline)
}

onBeforeMount(async () => {
  await useAuthorStore().init()
  await useTimelineStore().init()
})
</script>

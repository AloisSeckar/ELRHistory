<template>
  <div>
    <AdminFormSelectItem :label="'Select timeline:'" :options="timelineOptions" :selected="selected" @select-item="changeItem" />
    <h2>Edit timeline <strong>{{ currentTimelineName }}</strong></h2>
    <AdminFormTimeline :timeline-id="timelineId" @save="save" />
  </div>
</template>

<script setup lang="ts">
import type { FormKitOptionsItem } from '@formkit/inputs'
import type { Timeline, TimelineDB } from '@/database/types'

const initStores = async () => {
  await useAuthorStore().init()
  await useTimelineStore().init()
}
await initStores()

const idString = useRoute().params.id as string
const timelineId = idString === 'first' ? useTimelineStore().getFirstId : parseInt(idString)

const selected = ref(0)
const timelineOptions = [] as FormKitOptionsItem[]
let currentTimelineName: string
for (let i = 0; i < useTimelineStore().items.length; i++) {
  const item: Timeline = useTimelineStore().items[i] as Timeline
  timelineOptions.push({ value: item.timelineId, label: item.title })
  if (item.timelineId === timelineId) {
    selected.value = item.timelineId
    currentTimelineName = item.title
  }
}

const save = async (timeline: TimelineDB) => {
  await useUpdateItem(useTimelineStore(), 'timeline', '/timeline', timeline, timelineId)
}

const changeItem = (callback: number) => {
  navigateTo('/admin/edit/timeline/' + callback)
}
</script>

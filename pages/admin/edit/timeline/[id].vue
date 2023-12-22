<template>
  <div>
    <AdminFormSelectItem :label="'Select timeline:'" :options="timelineOptions" :selected="selected" @select-item="changeItem" />
    Edit timeline <strong>{{ currentTimelineName }}</strong>
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

const selected: FormKitOptionsItem = reactive({ value: '', label: '' })
const timelineOptions = [] as FormKitOptionsItem[]
let currentTimelineName: string
for (let i = 0; i < useTimelineStore().items.length; i++) {
  const item: Timeline = useTimelineStore().items[i] as Timeline
  timelineOptions.push({ value: item.timelineId, label: item.title })
  if (item.timelineId === timelineId) {
    selected.value = item.timelineId
    selected.label = item.title
    currentTimelineName = item.title
  }
}

const save = async (timeline: TimelineDB) => {
  await useUpdateItem(useTimelineStore(), 'timeline', '/timeline', timeline, timelineId)
}

const changeItem = (calback: String) => {
  navigateTo('/admin/edit/timeline/' + calback)
}
</script>

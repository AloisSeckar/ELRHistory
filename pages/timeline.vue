<template>
  <div>
    <div class="m-4 h-[60vh] border border-black">
      <InfiniTimeline :data-supplier="supplier" css-text-color="#000033" title-format="date" title-date-format="DD.MM.YYYY" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfiniTimelineSupplier } from 'infinitimeline'

const supplier: InfiniTimelineSupplier = {
  getTotal () {
    return useTimelineStore().getCount
  },
  get (startIndex: number, chunkSize: number) {
    return useTimelineStore().getBatch(startIndex, chunkSize).map((i) => {
      return {
        id: i.timelineId,
        title: i.title,
        content: i.content,
        tooltip: i.tooltip
      }
    })
  }
}

onBeforeMount(async () => {
  await useTimelineStore().init()
})
</script>

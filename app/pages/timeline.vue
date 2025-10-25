<template>
  <div>
    <div class="m-4 h-[60vh] border border-black">
      <InfiniTimeline
        :data-supplier="supplier" css-text-color="#000033" :logging="true"
        :images="true" blank-image="/favicon.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfiniTimelineSupplier } from 'infinitimeline'

const timeline = useTimelineStore()
await timeline.init()

const supplier: Ref<InfiniTimelineSupplier> = ref({
  getTotal() {
    return timeline.getCount
  },
  get(startIndex: number, chunkSize: number) {
    return timeline.getBatch(startIndex, chunkSize).map((i) => {
      return {
        id: i.timelineId,
        title: i.title,
        content: i.content,
        tooltip: i.tooltip,
      }
    })
  },
  changes: false,
})

watch(() => timeline.items, () => {
  supplier.value.changes = true
}, { deep: true })
</script>

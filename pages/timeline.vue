<template>
  <div>
    <div class="my-4">
      <h2>Timeline with dataArray</h2>
      <InfiniTimeline :data-array="data" />
    </div>
    <div class="my-4">
      <h2>Timeline with dataSupplier</h2>
      <InfiniTimeline :data-supplier="supplier" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfiniTimelineItem } from '@/components/InfiniTimeline.vue'

const data = [] as InfiniTimelineItem[]
for (let id = 1; id < 100; id++) {
  data.push({ id, date: '2023', title: 'First event', tooltip: 'More info about event' })
}

const supplier = {
  total: data.length,
  get (startIndex: number, chunkSize: number) {
    return data.slice(startIndex, startIndex + chunkSize)
  }
}

</script>

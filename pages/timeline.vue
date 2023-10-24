<template>
  <div>
    <div class="m-4 h-[300px] border border-black">
      <InfiniTimeline :chunk-size="10" :data-array="data" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfiniTimelineItem } from 'infinitimeline'

const data = [] as InfiniTimelineItem[]
for (let id = 1; id <= 100; id++) {
  data.push({ id, title: '2023', content: 'Event no. ' + id, tooltip: 'More info about event' })
}
</script>

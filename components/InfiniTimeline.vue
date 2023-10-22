<template>
  <div ref="timeline" style="border: 1px solid black; height: 180px; overflow: auto;">
    <div v-for="item in timelineData" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

export type InfiniTimelineItem = {
    id: number,
    date: string,
    title: string,
    tooltip?: string
}
export interface InfiniTimelineSupplier {
    total: number,
    get(startIndex: number, chunkSize: number): InfiniTimelineItem[]
}

const props = defineProps({
  chunkSize: { type: Number, default: 10 },
  dataArray: { type: Array as PropType<InfiniTimelineItem[]>, default: undefined },
  dataSupplier: { type: Object as PropType<InfiniTimelineSupplier>, default: undefined }
})

// template ref to HTML container
const timeline = ref(null)

// data array
const timelineData = ref([] as InfiniTimelineItem[])

// reset + load initial batch of data
onMounted(() => {
  timelineData.value = []
  getMoreData(0, props.chunkSize)
})

// define VueUse infinite scroll
useInfiniteScroll(
  timeline,
  () => {
    timelineData.value.push(...getMoreData(timelineData.value.length, props.chunkSize))
  },
  {
    distance: props.chunkSize,
    throttle: 100
  }
)

function getMoreData (start: number, batch: number) {
  console.log('fired')
  if (props.dataArray) {
    if (timelineData.value.length < props.dataArray.length) {
      return props.dataArray.slice(start, start + batch)
    }
  } else if (props.dataSupplier) {
    if (timelineData.value.length < props.dataSupplier.total) {
      return props.dataSupplier.get(start, batch)
    }
  } else {
    throw new Error("InfiniTimeline error: Either `dataArray` or `dataSupplier` must be provided'")
  }
  return []
}
</script>

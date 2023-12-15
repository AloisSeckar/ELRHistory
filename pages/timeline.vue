<template>
  <div>
    <div class="m-4 h-[60vh] border border-black">
      <InfiniTimeline :data-supplier="supplier" css-text-color="#000033" title-format="date" title-date-format="DD.MM.YYYY" :logging="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InfiniTimelineSupplier } from 'infinitimeline'

const store = useTimelineStore()

const supplier: Ref<InfiniTimelineSupplier> = ref({
  getTotal () {
    return store.getCount
  },
  get (startIndex: number, chunkSize: number) {
    return store.getBatch(startIndex, chunkSize).map((i) => {
      return {
        id: i.timelineId,
        title: i.title,
        content: i.content,
        tooltip: i.tooltip
      }
    })
  },
  changes: false
})

watch(() => store.items, () => {
  supplier.value.changes = true
}, { deep: true })

onBeforeMount(async () => {
  await store.init()
})
</script>

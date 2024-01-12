<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="timeline" :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="title"
        type="text"
        name="title"
        label="Title:"
        validation="required"
      />
      <FormKit
        id="content"
        type="textarea"
        name="content"
        label="Content:"
        validation="required"
        :maxlength="255"
        input-class="ta-small"
      />
      <FormKit
        id="tooltip"
        type="textarea"
        name="tooltip"
        label="Tooltip:"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { TimelineDB } from '@/database/types'

const props = defineProps({
  timelineId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', timeline: TimelineDB): void }>()

let label: string
let timeline: TimelineDB
if (props.timelineId > 0) {
  label = useT('admin.edit')
  const { timelineId, ...currentTimeline } = useTimelineStore().getById(props.timelineId)
  timeline = reactive({
    title: currentTimeline.title,
    content: currentTimeline.content,
    tooltip: currentTimeline.tooltip,
    authorId: currentTimeline.elrhAuthor?.authorId || -1
  })
} else {
  label = useT('admin.add')
  timeline = reactive(useTimelineStore().getEmpty)
  timeline.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
}

const authors = computed(() => useAuthorStore().getAuthorList)

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

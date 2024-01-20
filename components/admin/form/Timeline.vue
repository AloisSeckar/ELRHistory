<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="timeline" :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        :label="useT('admin.form.author')"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="title"
        type="text"
        name="title"
        :label="useT('admin.form.title')"
        validation="required"
      />
      <FormKit
        id="content"
        type="textarea"
        name="content"
        :label="useT('admin.form.content')"
        validation="required"
        :maxlength="255"
        input-class="ta-small"
      />
      <FormKit
        id="tooltip"
        type="textarea"
        name="tooltip"
        :label="useT('admin.form.tooltip')"
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
  timeline.authorId = useAuthorStore().getCurrent
}

const authors = computed(() => useAuthorStore().getAuthorList)

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

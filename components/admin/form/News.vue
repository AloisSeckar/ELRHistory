<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="news" :submit-label="label" @submit="saveForm">
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
      />
      <FormKit
        id="dateCreated"
        name="dateCreated"
        type="hidden"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { NewsDB } from '@/database/types'

const props = defineProps({
  newsId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', news: NewsDB): void }>()

let label: string
let news: NewsDB
if (props.newsId > 0) {
  label = useT('admin.edit')
  const { newsId, ...currentNews } = useNewsStore().getById(props.newsId)
  news = reactive({
    dateCreated: currentNews.dateCreated,
    dateEdited: currentNews.dateEdited,
    title: currentNews.title,
    content: currentNews.content,
    authorId: currentNews.elrhAuthor?.authorId || -1
  })
} else {
  label = useT('admin.add')
  news = reactive(useNewsStore().getEmpty)
  news.authorId = useAuthorStore().getCurrent
}

const authors = computed(() => useAuthorStore().getAuthorList)

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

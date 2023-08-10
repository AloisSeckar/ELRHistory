<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        v-model="news.authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="content"
        v-model="news.content"
        type="textarea"
        name="content"
        label="Content:"
        validation="required"
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
  label = 'Edit'
  const { newsId, ...currentNews } = useNewsStore().getById(props.newsId)
  news = reactive(JSON.parse(JSON.stringify(currentNews)))
} else {
  label = 'Add'
  news = reactive(JSON.parse(JSON.stringify(useNewsStore().getEmpty)))
  news.authorId = useAuthorStore().getItems?.[0]?.authorId
}

const authors = useAuthorStore().getItems.map(author => ({ value: author.authorId, label: author.name }))

const saveForm = (values: any) => {
  console.log(typeof values)
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        v-model="link.authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      /><FormKit
        id="categoryId"
        v-model="link.categoryId"
        type="select"
        name="categoryId"
        label="Category:"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="name"
        v-model="link.name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="dscr"
        v-model="link.dscr"
        type="textarea"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <AdminFormSelectImage :source="link.thumb" @change="setThumb" />
      <FormKit
        id="url"
        v-model="link.url"
        type="text"
        name="url"
        label="URL:"
        validation="required"
      />
      <FormKit
        id="dateCreated"
        v-model="link.dateCreated"
        name="dateCreated"
        type="hidden"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { LinkDB } from '@/database/types'

const props = defineProps({
  linkId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', link: LinkDB): void }>()

let label: string
let link: LinkDB
if (props.linkId > 0) {
  label = 'Edit'
  const { linkId, ...currentLink } = useLinkStore().getById(props.linkId)
  link = reactive(JSON.parse(JSON.stringify(currentLink)))
} else {
  label = 'Add'
  link = reactive(JSON.parse(JSON.stringify(useLinkStore().getEmpty)))
  link.authorId = useAuthorStore().getItems?.[0]?.authorId
}

const authors = useAuthorStore().getItems.map(author => ({ value: author.authorId, label: author.name }))
const categories = useCategoryStore().getByType('l').map(cat => ({ value: cat.categoryId, label: cat.name }))

const setThumb = (path: string) => {
  link.thumb = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="link" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      /><FormKit
        id="categoryId"
        type="select"
        name="categoryId"
        label="Category:"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="dscr"
        type="textarea"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <AdminFormSelectImage :source="link.thumb" @change="setThumb" />
      <FormKit
        id="url"
        type="text"
        name="url"
        label="URL:"
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
  link = reactive({
    categoryId: currentLink.elrhCategory?.categoryId || -1,
    ord: currentLink.ord,
    dateCreated: currentLink.dateCreated,
    dateEdited: currentLink.dateEdited,
    name: currentLink.name,
    dscr: currentLink.dscr,
    url: currentLink.url,
    thumb: currentLink.thumb,
    authorId: currentLink.elrhAuthor?.authorId || -1
  })
} else {
  label = 'Add'
  link = reactive(useLinkStore().getEmpty)
  link.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
}

const authors = computed(() => useAuthorStore().getAuthorList)
const categories = computed(() => useCategoryStore().getCategoryList('l'))

const setThumb = (path: string) => {
  link.thumb = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

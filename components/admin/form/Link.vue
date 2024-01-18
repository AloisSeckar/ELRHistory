<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="link" :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        :label="useT('admin.form.author')"
        validation="required"
        :options="authors"
      /><FormKit
        id="categoryId"
        type="select"
        name="categoryId"
        :label="useT('admin.form.category')"
        validation="required"
        :options="categories"
      />
      <FormKit
        id="name"
        type="text"
        name="name"
        :label="useT('admin.form.name')"
        validation="required"
      />
      <FormKit
        id="dscr"
        type="textarea"
        name="dscr"
        :label="useT('admin.form.dscr')"
        validation="required"
        :maxlength="255"
        input-class="ta-small"
      />
      <AdminFormSelectImage :source="link.thumb" :label="useT('admin.form.thumb')" @change="setThumb" />
      <FormKit
        id="url"
        type="text"
        name="url"
        :label="useT('admin.form.url')"
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
  label = useT('admin.edit')
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
  label = useT('admin.add')
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

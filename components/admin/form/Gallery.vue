<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="gallery" :submit-label="label" @submit="saveForm">
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
      />
      <FormKit
        id="parentId"
        type="select"
        name="parentId"
        :label="useT('admin.form.parent')"
        :options="galleries"
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
import type { GalleryDB } from '@/database/types'

const props = defineProps({
  galleryId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', article: GalleryDB): void }>()

let label: string
let gallery: GalleryDB
if (props.galleryId > 0) {
  label = useT('admin.edit')
  const { galleryId, ...currentGallery } = useGalleryStore().getById(props.galleryId)
  gallery = reactive({
    dateCreated: currentGallery.dateCreated,
    dateEdited: currentGallery.dateEdited,
    name: currentGallery.name,
    dscr: currentGallery.dscr,
    authorId: currentGallery.elrhAuthor?.authorId || -1,
    parentId: currentGallery.parentId?.galleryId
  })
} else {
  label = useT('admin.add')
  gallery = reactive(useGalleryStore().getEmpty)
  gallery.authorId = useAuthorStore().getCurrent
}

const authors = computed(() => useAuthorStore().getAuthorList)
const galleries = computed(() => {
  const fullList = useGalleryStore().getGalleryList
  const fixedList = fullList?.filter(g => g.value !== props.galleryId)
  fixedList.unshift({ value: null, label: '' })
  return fixedList
})

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

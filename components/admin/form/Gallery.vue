<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        v-model="gallery.authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
      />
      <FormKit
        id="name"
        v-model="gallery.name"
        type="text"
        name="name"
        label="Name:"
        validation="required"
      />
      <FormKit
        id="dscr"
        v-model="gallery.dscr"
        type="text"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <FormKit
        id="dateCreated"
        v-model="gallery.dateCreated"
        name="dateCreated"
        type="hidden"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
// TODO possible parent gallery

import type { GalleryDB } from '@/database/types'

const props = defineProps({
  galleryId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', article: GalleryDB): void }>()

let label: string
let gallery: GalleryDB
if (props.galleryId > 0) {
  label = 'Edit'
  const { galleryId, ...currentGallery } = useGalleryStore().getById(props.galleryId)
  gallery = reactive(JSON.parse(JSON.stringify(currentGallery)))

  if (currentGallery.elrhAuthor) {
    gallery.authorId = currentGallery.elrhAuthor.authorId
  }
} else {
  label = 'Add'
  gallery = reactive(JSON.parse(JSON.stringify(useGalleryStore().getEmpty)))
  gallery.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
}

const authors = computed(() => useAuthorStore().getAuthorList)

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

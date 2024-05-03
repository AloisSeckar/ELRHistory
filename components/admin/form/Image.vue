<template>
  <div>
    <FormKit
      v-slot="{ value }" type="form" :value="image"
      :submit-label="label" @submit="saveForm">
      <pre v-if="useRuntimeConfig().public.debug">{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        :label="useT('admin.form.author')"
        validation="required"
        :options="authors" />
      <FormKit
        id="name"
        type="text"
        name="name"
        :label="useT('admin.form.name')"
        validation="required" />
      <FormKit
        id="dscr"
        type="textarea"
        name="dscr"
        :label="useT('admin.form.dscr')"
        :rows="10" />
      <AdminFormSelectImage
        name="image" :label="useT('admin.form.image')" :source="image.image"
        folder="image"
        @change="setImage" />
      <FormKit
        id="galleryId"
        type="select"
        name="galleryId"
        :label="useT('admin.form.gallery')"
        validation="required"
        :options="galleries" />
      <FormKit
        id="dateCreated"
        name="dateCreated"
        type="hidden" />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { ImageDB } from '@/database/types'

const props = defineProps({
  imageId: { type: Number, default: -1 },
})
const emit = defineEmits<{ (e: 'save', article: ImageDB): void }>()

let label: string
let image: ImageDB
if (props.imageId > 0) {
  label = useT('admin.edit')
  const { imageId, ...currentImage } = useImageStore().getById(props.imageId)
  image = reactive({
    dateCreated: currentImage.dateCreated,
    dateEdited: currentImage.dateEdited,
    name: currentImage.name,
    dscr: currentImage.dscr,
    authorId: currentImage.elrhAuthor?.authorId || -1,
    image: currentImage.image,
    galleryId: currentImage.galleryId,
    ord: currentImage.ord,
  })
} else {
  label = useT('admin.add')
  image = reactive(useImageStore().getEmpty)
  image.authorId = useAuthorStore().getCurrent
}

const authors = computed(() => useAuthorStore().getAuthorList)
const galleries = computed(() => useGalleryStore().getGalleryList)

const setImage = (path: string) => {
  image.image = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}
</script>

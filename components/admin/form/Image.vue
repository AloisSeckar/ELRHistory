<template>
  <div>
    <FormKit v-slot="{ value }" type="form" :value="image" :submit-label="label" @submit="saveForm">
      <pre>{{ value }}</pre>
      <FormKit
        id="authorId"
        type="select"
        name="authorId"
        label="Author:"
        validation="required"
        :options="authors"
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
        type="text"
        name="dscr"
        label="Description:"
        validation="required"
      />
      <AdminFormSelectImage name="image" :source="image.image" @change="setImage" />
      <FormKit
        id="galleryId"
        type="select"
        name="galleryId"
        label="Gallery:"
        validation="required"
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
import type { ImageDB } from '@/database/types'

const props = defineProps({
  imageId: { type: Number, default: -1 }
})
const emit = defineEmits<{(e: 'save', article: ImageDB): void }>()

let label: string
let image: ImageDB
if (props.imageId > 0) {
  label = 'Edit'
  const { imageId, ...currentImage } = useImageStore().getById(props.imageId)
  image = reactive({
    dateCreated: currentImage.dateCreated,
    dateEdited: currentImage.dateEdited,
    name: currentImage.name,
    dscr: currentImage.dscr,
    authorId: currentImage.elrhAuthor?.authorId || -1,
    image: currentImage.image,
    galleryId: currentImage.galleryId.galleryId,
    ord: currentImage.ord,
    prevId: currentImage.prevId,
    nextId: currentImage.nextId
  })
} else {
  label = 'Add'
  image = reactive(useImageStore().getEmpty)
  image.authorId = useAuthorStore().getItems?.[0]?.authorId || -1
}

const authors = computed(() => useAuthorStore().getAuthorList)
const galleries = computed(() => useGalleryStore().getGalleryList)

// TODO probably not working?
const setImage = (path: string) => {
  image.image = path
}

const saveForm = (values: any) => {
  emit('save', JSON.parse(JSON.stringify(values)))
}

</script>

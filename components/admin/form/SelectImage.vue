<template>
  <div>
    <FormKit
      :id="name"
      v-model="imgSrc"
      type="text"
      :name="name"
      :label="label"
      validation="required"
      @change="$emit('change', imgSrc)"
    />
    <NuxtImg
      v-if="imgSrc"
      class="w-48 h-32 border"
      provider="cloudinary"
      :src="useRuntimeConfig().public.cloudinary.folder + imgSrc"
      :alt="name"
      :title="name"
    />
    <CldUploadWidget
      :key="widgetKey"
      v-slot="{ open }"
      :upload-preset="useRuntimeConfig().public.cloudinary.preset"
      :options="{
        sources: ['local'],
        clientAllowedFormats: ['jpg', 'jpeg', 'png', 'tiff', 'tif', 'gif'],
        publicId: Date.now().toString(),
        folder: `${useRuntimeConfig().public.cloudinary.folder}/${folder}`,
        maxFiles: 1,
        maxFileSize: 4000000,
        maxImageFileSize: 4000000,
        maxImageWidth: 2500,
        maxImageHeight: 2500,
      }"
      @upload="uploadFinished"
      @error="uploadError"
    >
      <FormKit
        type="button"
        :label="useT('admin.upload')"
        @click="open"
      />
    </CldUploadWidget>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  folder: { type: String, default: 'misc' },
  name: { type: String, default: 'thumb' },
  label: { type: String, default: 'Thumb:' },
  source: { type: String, default: '/blank.jpg' }
})
defineEmits<{(e: 'change', path: string): void}>()

const imgSrc = ref(props.source ? props.source : '/blank.jpg')

const uploadFinished = (result: Ref<any>) => {
  const name = result.value.info.public_id + '.' + result.value.info.format
  imgSrc.value = name.substring(name.indexOf('/')) // root folder is added automatically
  console.debug(`image ${name} was uploaded`)
  resetWidget()
}

const uploadError = (result: Ref<any>) => {
  console.error('upload failed')
  console.error(result.value)
  useModalStore().showModal('Error', 'Failed to upload image')
  resetWidget()
}

const widgetKey = ref(0)
const resetWidget = () => {
  widgetKey.value++
}
</script>

<style scoped>
img {
    display: inline;
    width: 150px;
    height: 100px;
}
</style>

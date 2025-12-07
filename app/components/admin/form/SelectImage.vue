<template>
  <div>
    <div class="flex">
      <div class="inline-block grow">
        <FormKit
          :id="filename"
          v-model="imgSrc"
          type="text"
          :name="filename"
          :label="label"
          validation="required"
          :disabled="true"
          :classes="{ inner: 'border border-slate-500 bg-slate-300' }"
          @change="$emit('change', imgSrc)" />
      </div>
      <div class="inline-block p-2 w-72">
        <CldUploadWidget
          :key="widgetKey"
          v-slot="{ open }"
          :upload-preset="useRuntimeConfig().public.cloudinary.preset"
          :options="getCloudinaryOptions(folder)"
          @result="uploadResult"
          @success="uploadFinished"
          @error="uploadError">
          <FormKit
            type="button"
            style="margin-top: 16px!important;"
            :label="useT('admin.upload')"
            @click="open" />
        </CldUploadWidget>
      </div>
      <div class="inline-block w-36 ml-2">
        <NuxtImg
          v-if="imgSrc"
          class="mx-auto w-48 h-32 border"
          provider="cloudinary"
          :src="useRuntimeConfig().public.cloudinary.folder + imgSrc"
          :alt="filename" :title="filename" crossorigin />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CloudinaryUploadWidgetError, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from '@cloudinary-util/types'

const props = defineProps({
  folder: { type: String, default: 'misc' },
  filename: { type: String, default: 'thumb' },
  label: { type: String, default: 'Thumb:' },
  source: { type: String, default: '/blank.jpg' },
})
defineEmits<{ (e: 'change', path: string): void }>()

const imgSrc = ref(props.source ? props.source : '/blank.jpg')

const uploadResult = (result: CloudinaryUploadWidgetResults) => {
  console.debug('upload result', result)
}

const uploadFinished = (result: CloudinaryUploadWidgetResults) => {
  const info = result.info as CloudinaryUploadWidgetInfo
  const name = info.public_id + '.' + info.format
  imgSrc.value = name.substring(name.indexOf('/')) // root folder is added automatically
  console.debug(`image ${name} was uploaded`)
  resetWidget()
}

const uploadError = (error: CloudinaryUploadWidgetError) => {
  console.error('upload failed')
  console.error(error)
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

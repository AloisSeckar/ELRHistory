<template>
  <div>
    <div class="flex">
      <div class="inline-block grow">
        <FormKit
          :id="name"
          v-model="imgSrc"
          type="text"
          :name="name"
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
          @upload="uploadFinished"
          @error="uploadError">
          <FormKit
            type="button"
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
          :alt="name"
          :title="name" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CldUploadWidgetResults } from '@nuxtjs/cloudinary/dist/runtime/components/CldUploadWidget.vue'

const props = defineProps({
  folder: { type: String, default: 'misc' },
  name: { type: String, default: 'thumb' },
  label: { type: String, default: 'Thumb:' },
  source: { type: String, default: '/blank.jpg' },
})
defineEmits<{ (e: 'change', path: string): void }>()

const imgSrc = ref(props.source ? props.source : '/blank.jpg')

const uploadFinished = (result: Ref<CldUploadWidgetResults>) => {
  const name = result.value.info.public_id + '.' + result.value.info.format
  imgSrc.value = name.substring(name.indexOf('/')) // root folder is added automatically
  console.debug(`image ${name} was uploaded`)
  resetWidget()
}

const uploadError = (result: Ref<{ value: string }>) => {
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

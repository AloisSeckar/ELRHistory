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
      :src="imgSrc"
      :alt="name"
      :title="name"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, default: 'thumb' },
  label: { type: String, default: 'Thumb:' },
  source: { type: String, default: '/blank.jpg' }
})
defineEmits<{(e: 'change', path: string): void}>()

const imgSrc = ref(props.source ? props.source : '/blank.jpg')
</script>

<style scoped>
img {
    display: inline;
    width: 150px;
    height: 100px;
}
</style>

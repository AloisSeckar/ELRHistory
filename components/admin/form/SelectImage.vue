<template>
  <div>
    <FormKit
      id="thumb"
      v-model="imgSrc"
      type="text"
      name="thumb"
      label="Thumb:"
      validation="required"
      @change="$emit('change', imgSrc)"
    />
    <img :src="imgSrc">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  source: { type: String, default: '' }
})
defineEmits<{(e: 'change', path: string): void}>()

const imgSrc = ref(props.source)
</script>

<style scoped>
img {
    display: inline;
    width: 150px;
    height: 100px;
}
</style>

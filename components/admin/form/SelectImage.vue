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
    <img :src="imgSrc">
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  name: { type: String, default: 'thumb' },
  source: { type: String, default: '/blank.jpg' }
})
defineEmits<{(e: 'change', path: string): void}>()

const imgSrc = ref(props.source ? props.source : '/blank.jpg')

const label = props.name[0]?.toUpperCase() + props.name?.substring(1) + ':'
</script>

<style scoped>
img {
    display: inline;
    width: 150px;
    height: 100px;
}
</style>

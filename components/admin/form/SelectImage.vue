<template>
    <div>
        <FormKit
            type="text" name="thumb" id="thumb"
            label="Thumb:" validation="required"
            v-model="imgSrc" @change="$emit('change', imgSrc)" />
        <img :src="imgSrc" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    source: { type: String, required: true }
})
defineEmits<{
  (e: 'change', path: string): void
}>()

const imgSrc = ref(props.source)
</script>

<style scoped>
img {
    display: inline;
    width: 150px;
    height: 100px;
}
</style>
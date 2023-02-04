<template>
  <div>
    <FormKit type="form" submit-label="Edit" @submit="$emit('selectItem', option)">
      <FormKit
        id="selectItem"
        v-model="option"
        type="select"
        name="selectItem"
        :label="label"
        validation="required"
        :options="options"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { FormKitOptionsItem } from '@formkit/inputs'

const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array as PropType<FormKitOptionsItem[]>, required: true },
  selected: { type: Object as PropType<FormKitOptionsItem>, required: true }
})
defineEmits<{(e: 'selectItem', option: String): void}>()

const option = ref(props.selected)
</script>

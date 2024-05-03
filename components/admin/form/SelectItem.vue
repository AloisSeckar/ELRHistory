<template>
  <div>
    <FormKit type="form" :actions="false">
      <div class="inline-block w-3/4">
        <FormKit
          id="selectItem"
          v-model="option"
          type="select"
          name="selectItem"
          :label="label"
          validation="required"
          :options="options" />
      </div>
      <div class="inline-block px-2 w-1/4">
        <FormKit
          type="button" :label="useT('admin.select')"
          @click="$emit('selectItem', option)" />
      </div>
    </FormKit>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { FormKitOptionsItem } from '@formkit/inputs'

const props = defineProps({
  label: { type: String, required: true },
  options: { type: Array as PropType<FormKitOptionsItem[]>, required: true },
  selected: { type: Number, required: true },
})
defineEmits<{ (e: 'selectItem', option: number): void }>()

const option = ref(props.selected)
</script>

<template>
    <div>
        <FormKit type="form" @submit="$emit('selectItem', option)" submit-label="Edit">
            <FormKit
                type="select" name="selectItem" id="selectItem"
                :label="label" validation="required"
                :options="options"
                v-model="option" />
        </FormKit>
    </div>
</template>

<script setup lang="ts">
import { PropType } from "vue"
import { FormKitOptionsItem } from '@formkit/inputs'

const props = defineProps({
    label: {type: String, required: true},
    options: {type: Array as PropType<FormKitOptionsItem[]>, required: true},
    selected: {type: Object as PropType<FormKitOptionsItem>, required: true},
})
defineEmits<{
  (e: 'selectItem', option: String): void
}>()

const option = props.selected
</script>
<template>
  <div class="inline-block px-2">
    <NuxtLink :to="{ path }">
      <span :title>
        <BaseIcon :icon size="1.125rem" css-class="mb-1.5 text-green-500 hover:text-yellow-400" />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { SupabaseActionType, SupabaseItemType } from '@/../database/types'

const props = defineProps({
  action: { type: String as PropType<SupabaseActionType>, default: 'edit' },
  item: { type: String as PropType<SupabaseItemType>, default: 'item' },
  link: { type: String, required: true },
})

const isEdit = props.action === 'edit'
const path = `/admin/${isEdit ? 'edit' : 'add'}/${props.link}`
const icon = isEdit ? 'wrench' : 'plus'
const title = isEdit ? useTAdminEdit(props.item) : useTAdminAdd(props.item)
</script>

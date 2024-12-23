<template>
  <li>
    <NuxtLink :to="link">
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { SupabaseActionType, SupabaseItemType } from '@/database/types'

const props = defineProps<{
  action: SupabaseActionType
  item: SupabaseItemType
}>()

let link = `/admin/${props.action}/${props.item}` + (props.action === 'edit' ? '/first' : '')
if (props.action === 'add' && props.item === 'image') {
  link += '/first'
}

const text = props.action === 'edit' ? useTAdminEdit(props.item) : useTAdminAdd(props.item)
</script>

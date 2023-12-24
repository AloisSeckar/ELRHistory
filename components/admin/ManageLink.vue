<template>
  <li>
    <NuxtLink :to="link">
      {{ $t(text) }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { SupabaseActionType, SupabaseItemType } from '@/database/types'

const props = defineProps<{
  action: SupabaseActionType
  item: SupabaseItemType
}>()

const link = `/admin/${props.action}/${props.item}` + (props.action === 'edit' ? '/first' : '')
const text = `admin.${props.action}.${props.item}`
</script>

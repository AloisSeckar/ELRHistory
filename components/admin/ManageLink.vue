<template>
  <li>
    <NuxtLink :to="link">
      {{ $t(text) }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">

type Action = 'add' | 'edit'
type Item = 'article' | 'book' | 'gallery' | 'image' | 'link' | 'news' | 'timeline'

const props = defineProps<{
  action: Action
  item: Item
}>()

const link = `/admin/${props.action}/${props.item}` + (props.action === 'edit' ? '/first' : '')
const text = `admin.${props.action}.${props.item}`
</script>

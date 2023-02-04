<template>
  <div class="box">
    <div class="box-header">
      {{ text.getKey('invalid-' + item) }}
    </div>
    <div class="box-content flex">
      {{ text.getKey('invalid-content') }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: { type: String, default: 'item' }
})
const text = useTextStore()
</script>

<template>
  <div class="box">
    <div class="box-header">
      {{ $t('invalid.' + item) }}
    </div>
    <div class="box-content flex">
      {{ $t('invalid.content') }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: { type: String, default: 'item' }
})
</script>

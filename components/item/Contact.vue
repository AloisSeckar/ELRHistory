<template>
  <div class="flex flex-row flex-wrap">
    <div class="w-[30%]">
      <strong>{{ item.name }}</strong>
    </div>
    <div class="w-[30%]">
      {{ item.email }}
    </div>
    <div class="w-[30%]">
      {{ item.phone }}
    </div>
    <div v-if="item.fb" class="w-[10%]">
      <NuxtLink :to="item.fb" :external="true" :title=" item.name + ' - Facebook'" class="text-xl">
        <BaseIcon icon="facebook" size="1.25rem" css-class="mb-1.5" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Contact } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Contact>, required: true }
})
</script>

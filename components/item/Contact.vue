<template>
  <div class="flex flex-col sm:flex-row">
    <div class="flex-1">
      <strong>{{ item.name }}</strong>
    </div>
    <div>
      <div class="min-[480px]:inline text-nowrap mx-2">
        {{ item.email }}
      </div>
      <div class="min-[480px]:inline text-nowrap mx-2">
        {{ item.phone }}
      </div>
      <div v-if="item.fb" class="min-[480px]:inline mx-2 w-32">
        <NuxtLink :to="item.fb" :external="true" :title=" item.name + ' - Facebook'" class="text-xl">
          <BaseIcon icon="facebook" size="1.25rem" css-class="mb-1.5" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Contact } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Contact>, required: true },
})
</script>

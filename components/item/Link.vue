<template>
  <div class="flex">
    <div class="flex-none w-44 p-2">
      <a :href="item.url" :title="item.url">
        <NuxtImg
          class="mx-auto w-40 h-28 border"
          provider="cloudinary"
          :src="item.thumb"
          :alt="item.name"
          :title="item.name"
        />
      </a>
    </div>
    <div class="grow p-2 pl-4 self-center">
      <a :href="item.url" :title="item.url">
        <strong>{{ item.name }}</strong>
      </a>
      <AdminEditLink v-if="user" :link="'link/' + item.linkId" item="link" />
      <br>
      {{ item.dscr }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Link } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Link>, required: true }
})

const user = computed(() => useLoginStore().user)
</script>

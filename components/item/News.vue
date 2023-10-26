<template>
  <div class="flex">
    <AdminEditLink v-if="user" :link="'news/' + item.newsId" item="news" />
    <div class="flex-none w-44 ml-2">
      <strong>{{ toDate(item.dateCreated) }}</strong> {{ item.elrhAuthor?.name }}
    </div>
    <div class="grow pl-4">
      <strong>{{ item.title }}</strong> - {{ item.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { News } from '@/database/types'

defineProps({
  item: { type: Object as PropType<News>, required: true }
})

const user = computed(() => useLoginStore().user)
</script>

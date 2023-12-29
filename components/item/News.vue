<template>
  <div class="flex flex-row flex-wrap">
    <AdminEditLink v-if="user" :link="'news/' + item.newsId" item="news" />
    <div class="w-20">
      <strong>{{ toDate(item.dateCreated) }}</strong>
    </div>
    <div class="w-36 text-center">
      {{ item.elrhAuthor?.name }}
    </div>
    <div class="grow">
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

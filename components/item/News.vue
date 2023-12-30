<template>
  <div class="flex flex-wrap">
    <div class="flex-none w-24">
      <strong>{{ toDate(item.dateCreated) }}</strong>
    </div>
    <div class="flex-none w-32 px-4 text-nowrap text-center">
      {{ item.elrhAuthor?.name }}
    </div>
    <div class="flex-1">
      <div>
        <AdminEditLink v-if="user" :link="'news/' + item.newsId" item="news" />
        <strong>{{ item.title }}</strong>
        <NuxtLink v-if="item.url" :to="item.url">
          <BaseIcon icon="goto" css-class="h-4" />
        </NuxtLink>
      </div>
      {{ item.content }}
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

<style scoped>
.fit {
  width: calc(100% - 230px);
}
.centered-element {
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>

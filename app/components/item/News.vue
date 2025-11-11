<template>
  <div class="flex flex-col md:flex-row mb-4">
    <div class="md:hidden">
      <strong>{{ toDate(item.dateCreated) }}</strong> <em>{{ item.elrhAuthor?.name }}</em>{{ $t('news.added') }}:
    </div>
    <div class="hidden md:inline-block md:w-32">
      <strong>{{ toDate(item.dateCreated) }}</strong>
    </div>
    <div class="hidden md:inline-block md:w-32">
      <em>{{ item.elrhAuthor?.name }}</em>
    </div>
    <div class="flex-1 mt-2 md:mt-0">
      <div>
        <AdminLinkIcon v-if="user" :link="'news/' + item.newsId" item="news" />
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
import type { News } from '@/../database/types'

defineProps({
  item: { type: Object as PropType<News>, required: true },
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

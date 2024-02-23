<template>
  <div class="flex flex-col sm:flex-row">
    <div class="hidden sm:inline-block sm:w-32 p-2">
      <BaseThumb :name="item.name" :image="item.thumb" :link="item.url" />
    </div>
    <div class="flex-1 p-2 pl-4">
      <div class="text-left sm:text-justify">
        <a :href="item.url" :title="item.name">
          <strong>{{ item.name }}</strong>
        </a>
        <AdminEditLink v-if="user" :link="'book/' + item.bookId" item="book" />
      </div>
      <div class="text-left sm:text-justify">
        <strong><em>{{ item.writer }}, {{ item.year }}</em></strong>
        <span v-if="item.review">&nbsp;&nbsp;<strong>[<NuxtLink :to="item.review" title="Recenze díla" no-prefetch>{{ $t('books.review') }}</NuxtLink>]</strong></span>
      </div>
      <div class="block sm:hidden m-2">
        <BaseThumb :name="item.name" :image="item.thumb" :link="item.url" />
      </div>
      <div class="text-left sm:text-justify">
        {{ item.dscr }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Book } from '@/database/types'

defineProps({
  item: { type: Object as PropType<Book>, required: true }
})

const user = computed(() => useLoginStore().user)
</script>

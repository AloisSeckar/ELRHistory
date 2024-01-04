<template>
  <div class="flex">
    <div class="flex-none w-32 p-2">
      <a :href="item.url" :title="item.name">
        <NuxtImg
          class="mx-auto"
          provider="cloudinary"
          width="75"
          height="100"
          :src="item.thumb"
          :alt="item.name"
          :title="item.name"
        />
      </a>
    </div>
    <div class="grow p-2 pl-4">
      <a :href="item.url" :title="item.name">
        <strong>{{ item.name }}</strong>
      </a>
      <AdminEditLink v-if="user" :link="'book/' + item.bookId" item="book" />
      <br>
      <strong><em>{{ item.writer }}, {{ item.year }}</em></strong>
      <span v-if="item.review">&nbsp;&nbsp;<strong>[<NuxtLink :to="item.review" title="Recenze díla" no-prefetch>{{ $t('books.review') }}</NuxtLink>]</strong></span>
      <br>
      {{ item.dscr }}
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

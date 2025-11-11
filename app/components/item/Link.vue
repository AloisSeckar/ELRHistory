<template>
  <div class="flex flex-col sm:flex-row">
    <div class="hidden sm:inline-block sm:w-44 p-2">
      <BaseThumb :name="item.name" :image="item.thumb" :link="item.url" landscape />
    </div>
    <div class="flex-1 p-2 sm:pl-4">
      <div>
        <a :href="item.url" :title="item.url">
          <strong>{{ item.name }}</strong>
        </a>
        <AdminLinkIcon v-if="user" :link="'link/' + item.linkId" item="link" />
      </div>
      <div class="block sm:hidden m-2">
        <BaseThumb :name="item.name" :image="item.thumb" :link="item.url" landscape />
      </div>
      <div>
        {{ item.dscr }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Link } from '@/../database/types'

defineProps({
  item: { type: Object as PropType<Link>, required: true },
})

const user = computed(() => useLoginStore().user)
</script>

<template>
  <div>
    <div class="box">
      <div class="box-header">
        <BaseIcon icon="bullhorn" size="1.125rem" css-class="mb-1.5 mr-1" /> {{ text.getKey('news-title') }}
      </div>
      <div class="box-content">
        <div v-for="item in news.getItems" :key="item.newsId">
          <ItemNews :item="item" />
        </div>
        <div v-if="news.items.length < 1" class="p-2">
          {{ text.getKey('news-none') }}
        </div>
      </div>
    </div>
    <div class="-mt-2 text-lg">
      {{ text.getKey('news-total') }}: <strong>{{ news.getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = useTextStore()
const news = useNewsStore()
</script>

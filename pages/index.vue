<template>
  <div>
    <div class="box">
      <div class="box-header">
        <BaseIcon icon="home" size="1.5rem" css-class="mb-1.5" /> {{ $t('index.about') }}
      </div>
      <div class="box-content" v-html="$t('index.welcome')" />
    </div>
    <div class="box">
      <div class="box-header">
        <BaseIcon icon="envelope" size="1.125rem" css-class="mb-1.5 mr-1" /> {{ $t('index.contacts') }}
      </div>
      <div class="box-content">
        <div v-for="item in (useContactStore().items as Contact[])" :key="item.contactId">
          <ItemContact :item="item" />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <BaseIcon icon="bullhorn" size="1.125rem" css-class="mb-1.5 mr-1" /> {{ $t('index.news') }}
      </div>
      <div class="box-content">
        <div v-for="item in useNewsStore().getTopItems" :key="item.newsId">
          <ItemNews :item="item" />
        </div>
        <div>
          [ <NuxtLink to="/news">
            {{ $t('index.news-all') }}
          </NuxtLink> ]
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Contact } from '@/database/types'

onBeforeMount(async () => {
  await useContactStore().init()
  await useNewsStore().init()
})
</script>

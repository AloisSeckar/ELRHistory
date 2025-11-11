<template>
  <div>
    <div class="box">
      <div class="box-header">
        <div class="ml-1">
          <BaseIcon icon="home" size="1.5rem" css-class="mb-1.5" />
          <h2 class="inline ml-2">
            {{ $t('index.about') }}
          </h2>
        </div>
      </div>
      <div v-dompurify-html="about" class="box-content" />
    </div>
    <div class="box">
      <div class="box-header">
        <div class="ml-1">
          <BaseIcon icon="envelope" size="1.125rem" css-class="mb-1.5 mr-1" />
          <h2 class="inline ml-2">
            {{ $t('index.contacts') }}
          </h2>
        </div>
      </div>
      <div class="box-content">
        <div v-for="item in (contacts.items as Contact[])" :key="item.contactId">
          <ItemContact :item="item" />
        </div>
      </div>
    </div>
    <div class="box">
      <div class="box-header">
        <div class="ml-1">
          <BaseIcon icon="bullhorn" size="1.125rem" css-class="mb-1.5 mr-1" />
          <h2 class="inline ml-2">
            {{ $t('index.news') }}
          </h2>
        </div>
      </div>
      <div class="box-content">
        <div v-for="item in news.getTopItems" :key="item.newsId">
          <ItemNews :item="item" />
        </div>
        <div>
          [&nbsp;<NuxtLink to="/news">
            {{ $t('index.news-all') }}
          </NuxtLink>&nbsp;]
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { preventSingleLetterOrphans } from 'elrh-pslo'
import type { Contact } from '@/../database/types'

const about = preventSingleLetterOrphans(useRuntimeConfig().public.webAbout)

const contacts = useContactStore()
await contacts.init()

const news = useNewsStore()
await news.init()
</script>

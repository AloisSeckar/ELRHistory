<template>
  <div>
    <div v-for="category in categoryList" :key="category.categoryId" class="box">
      <div class="box-header">
        <div class="ml-1">
          <BaseIcon icon="globe" size="1.125rem" css-class="mb-1.5 mr-1" />
          <h2 class="inline ml-2">
            {{ category.name }}
          </h2>
        </div>
      </div>
      <div class="box-content">
        <div>{{ category.dscr }}</div>
        <div v-for="link in links.getByCategory(category.categoryId)" :key="link.linkId">
          <ItemLink :item="link" />
        </div>
        <div v-if="links.getByCategory(category.categoryId).length < 1" class="p-2">
          {{ $t('links.none') }}
        </div>
      </div>
    </div>
    <div class="-mt-2 text-lg">
      {{ $t('links.total') }}: <strong>{{ links.getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = useCategoryStore()
await categories.init()
const categoryList = computed(() => categories.getByType('l'))

const links = useLinkStore()
await links.init()
</script>

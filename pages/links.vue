<template>
  <div>
    <div v-for="category in useCategoryStore().getByType('l')" :key="category.categoryId" class="box">
      <div class="box-header">
        <BaseIcon icon="globe" size="1.125rem" css-class="mb-1.5 mr-1" /> {{ category.name }}
      </div>
      <div class="box-content">
        <div>{{ category.dscr }}</div>
        <div v-for="link in useLinkStore().getByCategory(category.categoryId)" :key="link.linkId">
          <ItemLink :item="link" />
        </div>
        <div v-if="useLinkStore().getByCategory(category.categoryId).length < 1" class="p-2">
          {{ $t('links.none') }}
        </div>
      </div>
    </div>
    <div class="-mt-2 text-lg">
      {{ $t('links.total') }}: <strong>{{ useLinkStore().getCount }}</strong>
    </div>
  </div>
</template>

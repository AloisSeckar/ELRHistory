<template>
  <div>
    <div v-for="category in useCategoryStore().getByType('b')" :key="category.categoryId" class="box">
      <div class="box-header">
        <BaseIcon icon="book" size="1.5rem" css-class="mb-1.5" /> {{ category.name }}
      </div>
      <div class="box-content">
        <div>{{ category.dscr }}</div>
        <div v-for="book in useBookStore().getByCategory(category.categoryId)" :key="book.bookId">
          <ItemBook :item="book" />
        </div>
        <div v-if="useBookStore().getByCategory(category.categoryId).length < 1" class="p-2">
          {{ text.getKey('books-none') }}
        </div>
      </div>
    </div>
    <div class="-mt-2 text-lg">
      {{ text.getKey('books-total') }}: <strong>{{ useBookStore().getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

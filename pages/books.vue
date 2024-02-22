<template>
  <div>
    <div v-for="category in categoryList" :key="category.categoryId" class="box">
      <div class="box-header">
        <div class="ml-1">
          <BaseIcon icon="book" size="1.5rem" css-class="mb-1.5" />
          <h2 class="inline ml-2">
            {{ category.name }}
          </h2>
        </div>
      </div>
      <div class="box-content">
        <div>{{ category.dscr }}</div>
        <div v-for="book in books.getByCategory(category.categoryId)" :key="book.bookId">
          <ItemBook :item="book" />
        </div>
        <div v-if="books.getByCategory(category.categoryId).length < 1" class="p-2">
          {{ $t('books.none') }}
        </div>
      </div>
    </div>
    <div class="-mt-2 text-lg">
      {{ $t('books.total') }}: <strong>{{ books.getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = useCategoryStore()
await categories.init()
const categoryList = computed(() => categories.getByType('b'))

const books = useBookStore()
await books.init()
</script>

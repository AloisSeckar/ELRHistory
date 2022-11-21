<template>
    <div>
        <div class="box" v-for="category in categories.getByType('b')">
            <div class="box-header">{{ category.name }}</div>
            <div class="box-content">
                <div>{{ category.dscr }}</div>
                <div v-for="link in books.getByCategory(category.category_id)">
                    <BookItem :item="link" />
                </div>
                <div class="p-2" v-if="books.getByCategory(category.category_id).length < 1">No items</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const categories = useCategoryStore()
if (!categories.loaded) {
    await categories.fill()
}
const books = useBookStore()
if (!books.loaded) {
    await books.fill()
}
</script>
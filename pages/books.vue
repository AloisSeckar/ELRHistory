<template>
    <div>
        <div class="box" v-for="category in useCategoryStore().getByType('b')">
            <div class="box-header"><fa icon="book" />&nbsp;&nbsp;{{ category.name }}</div>
            <div class="box-content">
                <div>{{ category.dscr }}</div>
                <div v-for="link in useBookStore().getByCategory(category.category_id)">
                    <ItemBook :item="link" />
                </div>
                <div class="p-2" v-if="useBookStore().getByCategory(category.category_id).length < 1">{{ text.getKey('books-none') }}</div>
            </div>
        </div>
        <div class="-mt-2 text-lg">{{ text.getKey('books-total') }}: <strong>{{ useBookStore().getCount }}</strong></div>
    </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

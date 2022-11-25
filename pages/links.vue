<template>
    <div>
        <div class="box" v-for="category in categories.getByType('l')">
            <div class="box-header">{{ category.name }}</div>
            <div class="box-content">
                <div>{{ category.dscr }}</div>
                <div v-for="link in links.getByCategory(category.category_id)">
                    <ItemLink :item="link" />
                </div>
                <div class="p-2" v-if="links.getByCategory(category.category_id).length < 1">No items</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const categories = useCategoryStore()
if (!categories.loaded) {
    await categories.fill()
}
const links = useLinkStore()
if (!links.loaded) {
    await links.fill()
}
</script>
<template>
    <div>
        <div class="box" v-for="category in useCategoryStore().getByType('l')">
            <div class="box-header"><fa icon="globe" />&nbsp;&nbsp;{{ category.name }}</div>
            <div class="box-content">
                <div>{{ category.dscr }}</div>
                <div v-for="link in useLinkStore().getByCategory(category.category_id)">
                    <ItemLink :item="link" />
                </div>
                <div class="p-2" v-if="useLinkStore().getByCategory(category.category_id).length < 1">{{ text.getKey('links-none') }}</div>
            </div>
        </div>
        <div class="-mt-2 text-lg">{{ text.getKey('links-total') }}: <strong>{{ useLinkStore().getCount }}</strong></div>
    </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

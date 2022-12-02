<template>
    <div>
        <div class="box" v-for="category in useCategoryStore().getByType('l')">
            <div class="box-header"><fa icon="globe" />&nbsp;&nbsp;{{ category.name }}</div>
            <div class="box-content">
                <div>{{ category.dscr }}</div>
                <div v-for="link in useLinkStore().getByCategory(category.category_id)">
                    <ItemLink :item="link" />
                </div>
                <div class="p-2" v-if="useLinkStore().getByCategory(category.category_id).length < 1">No items</div>
            </div>
        </div>
    </div>
</template>

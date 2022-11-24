<template>
        <div class="box">
            <div class="box-header">
                {{ item.name }}
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ item.elrh_category.name }}</strong> | {{ item.elrh_author.name }} | <em>{{ item.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content flex">
                <div class="flex-none pr-2">
                    <img :src="item.thumb" :alt="item.name" :width="120" />
                </div>
                <div class="flex-1">
                    <div class="pb-1">{{ item.dscr }}</div>
                    <hr />
                    <div class="pt-1" v-html="item.content.substring(0,200) + '[...]'"></div>
                </div>
            </div>
        </div>
</template>

<script setup lang="ts">
defineProps({
    item: {type: Object, required: true}
})
</script>
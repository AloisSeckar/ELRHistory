<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                {{ item.name }}
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ item.elrh_category?.name }}</strong> | {{ item.elrh_author?.name }} | 
                    <em>{{ item.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content flex">
                <div class="flex-none pr-2">
                    <img :src="'/' + item.thumb" :alt="item.name" :width="120" />
                </div>
                <div class="flex-1">
                    <div class="pb-1">{{ item.dscr }}</div>
                    <div class="pt-1" v-if="detail" v-html="item.content"></div>
                    <div class="pt-1" v-else>
                        <NuxtLink :to="{ path: '/article/' + item.article_id }">[ Read article ]</NuxtLink>
                    </div>
                    <div class="pt-1" v-if="detail && item.elrh_gallery">
                        <NuxtLink :to="{ path: '/gallery/' + item.elrh_gallery.gallery_id }">[ View gallery ]</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="box" v-else>
            <div class="box-header">Invalid article ID</div>
            <div class="box-content flex">Data doesn't exist or cannot be loaded</div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: { type: Object, required: true, default: {} },
    detail: { type: Boolean, default: false }
})
</script>
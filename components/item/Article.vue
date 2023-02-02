<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="graduation-cap" />&nbsp;
                {{ item.name }}
                <div class="inline pl-2" v-if="user">
                    <NuxtLink :to="{ path: '/admin/edit/article/' + item.articleId }">
                        <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit article" />
                    </NuxtLink>
                </div>
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ item.elrhCategory?.name }}</strong> | {{ item.elrhAuthor?.name }} | 
                    <em>{{ item.dateCreated?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content flex">
                <div class="flex-none pr-2">
                    <img class="thumb" :src="item.thumb" :alt="item.name" :title="item.name" />
                </div>
                <div class="flex-1">
                    <div class="pb-1">{{ item.dscr }}</div>
                    <div class="pt-1" v-if="detail" v-html="item.content"></div>
                    <div class="pt-1" v-else>
                        [ <NuxtLink :to="{ path: '/article/' + item.articleId }">{{ text.getKey('article-read') }}</NuxtLink> ]
                    </div>
                    <div class="pt-1" v-if="detail && item.elrhGallery">
                        [ <NuxtLink :to="{ path: '/gallery/' + item.elrhGallery.galleryId }">{{ text.getKey('article-gallery') }}</NuxtLink> ]
                    </div>
                </div>
            </div>
        </div>
        <ItemInvalid item="article" v-else />
    </div>
</template>

<script setup lang="ts">
import type { Article } from '@/database/types'
import { PropType } from 'vue'

defineProps({
    item: { type: Object as PropType<Article>, required: true, default: {} },
    detail: { type: Boolean, default: false }
})

const text = useTextStore()
const user = computed(() => useLoginStore().user)
</script>
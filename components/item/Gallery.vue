<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">{{ item.name }}</NuxtLink>
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ parent ? parent : 'Index' }}</strong> | {{ item.elrh_author?.name }} |
                    <em>{{ item.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content">
                <div v-if="detail" v-html="item.dscr"></div>
                <div v-else>
                    <span v-if="item.dscr?.length > 200" v-html="item.dscr.substring(0, 200) + '...'"></span>
                    <span v-else v-html="item.dscr"></span>
                    <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }" v-if="item.dscr?.length > 200">
                        [ Read more ]</NuxtLink>
                </div>
                <div>
                    Here will be images
                </div>
                <div v-if="detail">
                    Here will be parent
                </div>
                <div>
                    Here will be sub-galleries
                </div>
                <div>
                    Here will be sub-article
                </div>
            </div>
        </div>
        <div class="box" v-else>
            <div class="box-header">Invalid gallery ID</div>
            <div class="box-content flex">Data doesn't exist or cannot be loaded</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/composables/useGalleryStore'
import { typeofTypeAnnotation } from '@babel/types';
import { PropType } from 'vue'

defineProps({
    item: { type: Object as PropType<Gallery>, required: true, default: {} },
    detail: { type: Boolean, default: false },
    parent: { type: String, default: '' },
})
</script>
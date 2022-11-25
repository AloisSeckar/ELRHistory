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
                <div>
                    Here will be images
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
import { PropType } from 'vue'

defineProps({
    item: { type: Object as PropType<Gallery>, required: true, default: {} },
    parent: { type: String, default: '' },
})
</script>
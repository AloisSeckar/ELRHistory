<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                {{ item.name }}
                <span class="float-right pr-1 text-base font-normal">
                    <NuxtLink :to="{ path: '/gallery/' + item.gallery_id?.gallery_id }">
                        <strong>{{ item.gallery_id?.name }}</strong>
                    </NuxtLink>| 
                    {{ item.author_id?.name }} |
                    <em>{{ item.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content text-center">
                <div class="text-justify mb-2">
                    {{ item.dscr }}
                </div>
                <hr class="mb-2" />
                <ItemImageNav :item="item" :editable="editable" />
                <img class="m-2 inline-block max-w-[96%]" :src="'/' + item.image" :alt="item.name" :title="item.title" />
                <ItemImageNav :item="item" :editable="editable" />
            </div>
        </div>
        <div class="box" v-else>
            <div class="box-header">Invalid image ID</div>
            <div class="box-content flex">Data doesn't exist or cannot be loaded</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Image } from '@/composables/useImageStore'
import { PropType } from 'vue'

const props = defineProps({
    item: { type: Object as PropType<Image>, required: true, default: {} },
})

// TODO will depend on login state
const editable = false
</script>
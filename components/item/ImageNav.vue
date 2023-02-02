<template>
    <div class="text-2xl">
        
        <div class="inline-block" v-if="editable">
            <NuxtLink :to="{ path: '/image/' + item.prevId }" title="Move image forward" v-if="item.prevId">
                <fa class="mx-4 text-green-500 hover:text-yellow-400" icon="backward"/>
            </NuxtLink>
            <fa class="mx-4 text-gray-400" icon="backward" v-else />
        </div>
        
        <NuxtLink :to="{ path: '/image/' + item.prevId }" title="Previous" v-if="item.prevId">
            <fa class="mx-1" icon="arrow-left"/>
        </NuxtLink>
        <fa class="mx-1 text-gray-400" icon="arrow-left" v-else />

        <NuxtLink :to="{ path: '/gallery/' + item.galleryId?.galleryId }" title="Parent gallery">
            <fa class="mx-1" icon="square" />
        </NuxtLink>

        <NuxtLink :to="{ path: '/image/' + item.nextId }" title="Next" v-if="item.nextId">
            <fa class="mx-1" icon="arrow-right" />
        </NuxtLink>
        <fa class="mx-1 text-gray-400" icon="arrow-right" v-else />

        <div class="inline-block" v-if="editable">
            <NuxtLink :to="{ path: '/image/' + item.nextId }" title="Next" v-if="item.nextId">
                <fa class="mx-4 text-green-500 hover:text-yellow-400" icon="forward" />
            </NuxtLink>
            <fa class="mx-4 text-gray-400" icon="forward" v-else />
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Image } from '@/database/types'
import { PropType } from 'vue'

const props = defineProps({
    item: { type: Object as PropType<Image>, required: true, default: {} },
    editable: { type: Boolean, default: false }
})
</script>

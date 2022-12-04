<template>
    <div class="text-2xl">
        
        <div class="inline-block" v-if="editable">
            <NuxtLink :to="{ path: '/image/' + item.prev_id }" title="Move image forward" v-if="item.prev_id">
                <fa class="mx-4" icon="backward"/>
            </NuxtLink>
            <fa class="mx-4 text-gray-400" icon="backward" v-else />
        </div>
        
        <NuxtLink :to="{ path: '/image/' + item.prev_id }" title="Previous" v-if="item.prev_id">
            <fa class="mx-1" icon="arrow-left"/>
        </NuxtLink>
        <fa class="mx-1 text-gray-400" icon="arrow-left" v-else />

        <NuxtLink :to="{ path: '/gallery/' + item.gallery_id?.gallery_id }" title="Parent gallery">
            <fa class="mx-1" icon="square" />
        </NuxtLink>

        <NuxtLink :to="{ path: '/image/' + item.next_id }" title="Next" v-if="item.next_id">
            <fa class="mx-1" icon="arrow-right" />
        </NuxtLink>
        <fa class="mx-1 text-gray-400" icon="arrow-right" v-else />

        <div class="inline-block" v-if="editable">
            <NuxtLink :to="{ path: '/image/' + item.next_id }" title="Next" v-if="item.next_id">
                <fa class="mx-4" icon="forward" />
            </NuxtLink>
            <fa class="mx-4 text-gray-400" icon="forward" v-else />
        </div>

    </div>
</template>

<script setup lang="ts">
import type { Image } from '@/composables/useImageStore'
import { PropType } from 'vue'

const props = defineProps({
    item: { type: Object as PropType<Image>, required: true, default: {} },
    editable: { type: Boolean, default: false }
})
</script>

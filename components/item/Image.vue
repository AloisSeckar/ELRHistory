<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                {{ item.name }}
                <div class="inline pl-2" v-if="user">
                    <NuxtLink :to="{ path: '/admin/edit/image/' + item.image_id }">
                        <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit image" />
                    </NuxtLink>
                </div>
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
                <img class="m-2 inline-block max-w-[96%]" :src="item.image" :alt="item.name" :title="item.title" />
                <ItemImageNav :item="item" :editable="editable" />
            </div>
        </div>
        <ItemInvalid item="image" v-else />
    </div>
</template>

<script setup lang="ts">
import type { Image } from '@/composables/useImageStore'
import { PropType } from 'vue'

defineProps({
    item: { type: Object as PropType<Image>, required: true, default: {} },
})

const editable = computed(() => useLoginStore().user ? true : false)
const user = computed(() => useLoginStore().user)
</script>
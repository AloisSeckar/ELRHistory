<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                {{ item.name }}
                <div class="inline pl-2" v-if="user">
                    <NuxtLink :to="{ path: '/admin/edit/image/' + item.imageId }">
                        <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit image" />
                    </NuxtLink>
                </div>
                <span class="float-right pr-1 text-base font-normal">
                    <NuxtLink :to="{ path: '/gallery/' + item.galleryId?.galleryId }">
                        <strong>{{ item.galleryId?.name }}</strong>
                    </NuxtLink>| 
                    {{ item.elrhAuthor?.name }} |
                    <em>{{ item.dateCreated?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content text-center">
                <div class="text-justify mb-2">
                    {{ item.dscr }}
                </div>
                <hr class="mb-2" />
                <ItemImageNav :item="item" :editable="editable" />
                <img class="m-2 inline-block max-w-[96%]" :src="item.image" :alt="item.name" :title="item.name" />
                <ItemImageNav :item="item" :editable="editable" />
            </div>
        </div>
        <ItemInvalid item="image" v-else />
    </div>
</template>

<script setup lang="ts">
import type { Image } from '@/database/types'
import { PropType } from 'vue'

defineProps({
    item: { type: Object as PropType<Image>, required: true, default: {} },
})

const editable = computed(() => useLoginStore().user ? true : false)
const user = computed(() => useLoginStore().user)
</script>
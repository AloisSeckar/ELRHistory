<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">{{ item.name }}</NuxtLink>
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ parent ? parent : 'Index' }}</strong> | {{ item.author_id?.name }} |
                    <em>{{ item.date_created?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content">
                <div v-if="detail" v-html="item.dscr"></div>
                <div v-else>
                    <span v-if="item.dscr?.length > 200" v-html="item.dscr.substring(0, 200) + '...'"></span>
                    <span v-else v-html="item.dscr"></span>
                    <span v-if="item.dscr?.length > 200">
                        [ <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }" v-if="item.dscr?.length > 200">
                            Read more</NuxtLink> ]
                    </span>
                </div>
                <div>
                    <strong>Images in gallery:</strong>
                    <div class="flex flex-wrap">
                        <div v-for="image in images">
                            <img class="thumb" :src="'/' + image.image" :alt="image.name" :title="image.title" />
                        </div>
                        <div v-if="(!detail && images.length > 5)" class="thumb leading-6">
                            <br />
                            [ <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">See more...</NuxtLink> ]
                        </div>
                    </div>
                </div>
                <div>
                    <span v-if="images.length > 0">
                        This gallery contains 
                        <strong>{{ useImageStore().getCountByGallery(item.gallery_id) }}</strong> 
                        images in total
                    </span>
                    <span v-else>
                        This gallery has no images
                    </span>
                    [ <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">View gallery</NuxtLink> ]
                </div>
                <div v-if="detail">
                    <strong>Parent gallery:</strong>
                    <div v-if="item.parent_id">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.parent_id.gallery_id }">
                            {{ item.parent_id.name }}</NuxtLink>
                    </div>
                    <div v-else>
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/galleries' }">Index</NuxtLink>
                    </div>
                </div>
                <div>
                    <strong>Sub-galleries:</strong>
                    <div v-for="gallery in children">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + gallery.gallery_id }">
                            {{ gallery.name }}</NuxtLink>
                    </div>
                    <div v-if="children.length === 0">
                        No sub-galleries
                    </div>
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
import type { Image } from '@/composables/useImageStore'
import { PropType } from 'vue'

defineProps({
    detail: { type: Boolean, default: false },
    item: { type: Object as PropType<Gallery>, required: true, default: {} },
    images: { type: Array as PropType<Image[]>, default: [] },
    children: { type: Array as PropType<Gallery[]>, default: [] },
    parent: { type: String, default: '' },
})
</script>
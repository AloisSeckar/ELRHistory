<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">{{ item.name }}</NuxtLink>
                <div class="inline pl-2" v-if="user">
                    <NuxtLink :to="{ path: '/admin/edit/gallery/' + item.galleryId }">
                        <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit gallery" />
                    </NuxtLink>
                </div>
                <span class="float-right pr-1 text-base font-normal">
                    <strong>{{ parent ? parent : 'Index' }}</strong> | {{ item.elrhAuthor?.name }} |
                    <em>{{ item.dateCreated?.split('T')[0] }}</em>
                </span>
            </div>
            <div class="box-content">
                <div v-if="detail" v-html="item.dscr"></div>
                <div v-else>
                    <span v-if="longDscr" v-html="item.dscr?.substring(0, 200) + '...'"></span>
                    <span v-else v-html="item.dscr"></span>
                    <span v-if="longDscr">
                        [ <NuxtLink :to="{ path: '/gallery/' + item.galleryId }" v-if="longDscr">
                            {{ text.getKey('gallery-read-more') }}</NuxtLink> ]
                    </span>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-images') }}</strong>
                    <div class="flex flex-wrap">
                        <div v-for="image in thumbs">
                            <NuxtLink :to="{ path: '/image/' + image.imageId }">
                                <img class="thumb" :src="image.image" :alt="image.name" :title="image.name" />
                            </NuxtLink>
                        </div>
                        <div v-if="(!detail && images > 5)" class="thumb leading-6">
                            <br />
                            [ <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
                                {{ text.getKey('gallery-see-more') }}</NuxtLink> ]
                        </div>
                    </div>
                </div>
                <div>
                    <span v-if="images > 0">
                        {{ text.getKey('gallery-images-1') }}
                        <strong>{{ useImageStore().getCountByGallery(item.galleryId) }}</strong>
                        {{ text.getKey('gallery-images-2') }}
                    </span>
                    <span v-else>
                        {{ text.getKey('gallery-images-none') }}
                    </span>
                    <span v-if="!detail">
                        [ <NuxtLink :to="{ path: '/gallery/' + item.galleryId }">
                            {{ text.getKey('gallery-images-view') }}</NuxtLink> ]
                    </span>
                </div>
                <div v-if="detail">
                    <strong>{{ text.getKey('gallery-parent') }}</strong>
                    <div v-if="item.parentId">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.parentId.galleryId }">
                            {{ item.parentId.name }}</NuxtLink>
                    </div>
                    <div v-else>
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/galleries' }">
                            {{ text.getKey('gallery-parent-index') }}</NuxtLink>
                    </div>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-sub') }}</strong>
                    <div v-for="gallery in children">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + gallery.galleryId }">
                            {{ gallery.name }}</NuxtLink>
                    </div>
                    <div v-if="children.length === 0">
                        {{ text.getKey('gallery-sub-none') }}
                    </div>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-articles') }}</strong>
                    <div v-for="article in articles">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/article/' + article.articleId }">
                            {{ article.name }}</NuxtLink> [ {{ article.elrhAuthor?.name }} ]<br />
                    </div>
                    <div v-if="articles ? articles.length === 0 : true">
                        {{ text.getKey('gallery-articles-none') }}
                    </div>
                </div>
            </div>
        </div>
        <ItemInvalid item="gallery" v-else />
    </div>
</template>

<script setup lang="ts">
import type { Article, Gallery } from '@/database/types'
import { PropType } from 'vue'

const props = defineProps({
    detail: { type: Boolean, default: false },
    item: { type: Object as PropType<Gallery>, required: true, default: {} },
})

const text = useTextStore()
const user = computed(() => useLoginStore().user)

const id = props.item.galleryId
const images = computed(() => useImageStore().getCountByGallery(id))
const thumbs = computed(() => useImageStore().getByGallery(id, props.detail ? undefined : 5))
const children = computed(() => useGalleryStore().getByParent(id))
const parent = computed(() => 'Index') // TODO
const articles = computed(() => props.item.elrhArticle)
const longDscr = computed(() => props.item.dscr ? props.item.dscr.length > 200 : false)
</script>
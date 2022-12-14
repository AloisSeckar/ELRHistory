<template>
    <div>
        <div class="box" v-if="item.name">
            <div class="box-header">
                <fa icon="image" />&nbsp;
                <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">{{ item.name }}</NuxtLink>
                <div class="inline pl-2" v-if="user">
                    <NuxtLink :to="{ path: '/admin/edit/gallery/' + item.gallery_id }">
                        <fa class="text-green-500 hover:text-yellow-400" icon="wrench" title="Edit gallery" />
                    </NuxtLink>
                </div>
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
                            {{ text.getKey('gallery-read-more') }}</NuxtLink> ]
                    </span>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-images') }}</strong>
                    <div class="flex flex-wrap">
                        <div v-for="image in thumbs">
                            <NuxtLink :to="{ path: '/image/' + image.image_id }">
                                <img class="thumb" :src="'/' + image.image" :alt="image.name" :title="image.title" />
                            </NuxtLink>
                        </div>
                        <div v-if="(!detail && images > 5)" class="thumb leading-6">
                            <br />
                            [ <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">
                                {{ text.getKey('gallery-see-more') }}</NuxtLink> ]
                        </div>
                    </div>
                </div>
                <div>
                    <span v-if="images > 0">
                        {{ text.getKey('gallery-images-1') }}
                        <strong>{{ useImageStore().getCountByGallery(item.gallery_id) }}</strong>
                        {{ text.getKey('gallery-images-2') }}
                    </span>
                    <span v-else>
                        {{ text.getKey('gallery-images-none') }}
                    </span>
                    <span v-if="!detail">
                        [ <NuxtLink :to="{ path: '/gallery/' + item.gallery_id }">
                            {{ text.getKey('gallery-images-view') }}</NuxtLink> ]
                    </span>
                </div>
                <div v-if="detail">
                    <strong>{{ text.getKey('gallery-parent') }}</strong>
                    <div v-if="item.parent_id">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + item.parent_id.gallery_id }">
                            {{ item.parent_id.name }}</NuxtLink>
                    </div>
                    <div v-else>
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/galleries' }">
                            {{ text.getKey('gallery-parent-index') }}</NuxtLink>
                    </div>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-sub') }}</strong>
                    <div v-for="gallery in children">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/gallery/' + gallery.gallery_id }">
                            {{ gallery.name }}</NuxtLink>
                    </div>
                    <div v-if="children.length === 0">
                        {{ text.getKey('gallery-sub-none') }}
                    </div>
                </div>
                <div>
                    <strong>{{ text.getKey('gallery-articles') }}</strong>
                    <div v-for="article in articles">
                        &#9656;&nbsp;<NuxtLink :to="{ path: '/article/' + article.article_id }">
                            {{ article.name }}</NuxtLink> [ {{ article.author_id?.name }} ]<br />
                    </div>
                    <div v-if="articles.length === 0">
                        {{ text.getKey('gallery-articles-none') }}
                    </div>
                </div>
            </div>
        </div>
        <ItemInvalid item="gallery" v-else />
    </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/composables/useGalleryStore'
import { PropType } from 'vue'

const props = defineProps({
    detail: { type: Boolean, default: false },
    item: { type: Object as PropType<Gallery>, required: true, default: {} },
})

const text = useTextStore()
const user = computed(() => useLoginStore().user)

const id = props.item.gallery_id
const images = computed(() => useImageStore().getCountByGallery(id))
const thumbs = computed(() => useImageStore().getByGallery(id, props.detail ? undefined : 5))
const children = computed(() => useGalleryStore().getByParent(id))
const parent = computed(() => 'Index') // TODO
const articles = computed(() => props.item.elrh_article)
</script>
<template>
    <div>
        <ItemGallery v-for="gallery in galleries" :item="gallery" 
            :images="getImagesForGallery(gallery.gallery_id)" :children="getChildrenForGallery(gallery.gallery_id)" />
    </div>
</template>

<script setup lang="ts">
import type { Gallery } from '@/composables/useGalleryStore'
import type { Image } from '@/composables/useImageStore'

const galleryStore = useGalleryStore()
if (!galleryStore.loaded) {
    await galleryStore.fill()
}

const imageStore = useImageStore()
if (!imageStore.loaded) {
    await imageStore.fill()
}

const galleries = computed(() => galleryStore.getByParent())

function getImagesForGallery(gallery_id: number): Image[] {
    return useImageStore().getByGallery(gallery_id, 5)
}
function getChildrenForGallery(gallery_id: number): Gallery[] {
    return useGalleryStore().getByParent(gallery_id)
}
</script>
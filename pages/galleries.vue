<template>
    <div>
        <ItemGallery v-for="gallery in galleries" :item="gallery" />
    </div>
</template>

<script setup lang="ts">
const galleryStore = useGalleryStore()
if (!galleryStore.loaded) {
    await galleryStore.fill()
}

const imageStore = useImageStore()
if (!imageStore.loaded) {
    await imageStore.fill()
}

const galleries = computed(() => galleryStore.getByParent())
</script>
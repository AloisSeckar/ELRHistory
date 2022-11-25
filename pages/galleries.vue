<template>
    <div>
        <GalleryItem v-for="gallery in galleries.items" :item="gallery" />
    </div>
</template>

<script setup lang="ts">
const galleries = useGalleryStore()
if (!galleries.loaded) {
    await galleries.fill()
}
</script>
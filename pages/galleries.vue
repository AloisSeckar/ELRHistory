<template>
    <div>
        <ItemGallery v-for="gallery in useGalleryStore().getByParent()" :item="gallery" />
    </div>
    <div class="-mt-2 text-lg">
        {{ text.getKey('galleries-total') }}: <strong>{{ useGalleryStore().getCount }}</strong> |
        {{ text.getKey('images-total') }}: <strong>{{ useImageStore().getCount }}</strong>
    </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

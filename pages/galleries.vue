<template>
  <div>
    <ItemGallery v-for="gallery in galleries.getByParent()" :key="gallery.galleryId" :item="gallery" />
    <div class="-mt-2 text-lg">
      {{ $t('galleries.total') }}: <strong>{{ galleries.getCount }}</strong> |
      {{ $t('images.total') }}: <strong>{{ images.getCount }}</strong>
    </div>
  </div>
</template>

<script setup lang="ts">
const galleries = useGalleryStore()
const images = useImageStore()

onBeforeMount(async () => {
  await useGalleryStore().init()
  await useImageStore().init()
})
</script>

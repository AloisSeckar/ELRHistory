<template>
  <div>
    <ItemGallery v-for="gallery in useGalleryStore().getByParent()" :key="gallery.galleryId" :item="gallery" />
    <div class="-mt-2 text-lg">
      {{ $t('galleries.total') }}: <strong>{{ useGalleryStore().getCount }}</strong> |
      {{ $t('images.total') }}: <strong>{{ useImageStore().getCount }}</strong>
    </div>
  </div>
</template>

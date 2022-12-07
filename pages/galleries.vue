<template>
    <div>
        <ItemGallery v-for="gallery in useGalleryStore().getByParent()" :item="gallery" />
    </div>
    <div class="-mt-2 text-lg">
        Total galleries: <strong>{{ useGalleryStore().getCount }}</strong> |
        Total images: <strong>{{ useImageStore().getCount }}</strong>
    </div>
</template>

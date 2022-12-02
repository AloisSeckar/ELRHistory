<template>
    <div>
        <ItemGallery v-for="gallery in useGalleryStore().getByParent()" :item="gallery" />
    </div>
</template>

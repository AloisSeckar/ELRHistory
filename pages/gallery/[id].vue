<template>
    <div>
        <ItemGallery :item="item" :images="useImageStore().getByGallery(item?.gallery_id)" :detail="true" :parent="parent" />
    </div>
</template>

<script setup lang="ts">
const galleries = useGalleryStore()
if (!galleries.loaded) {
    await galleries.fill()
}

const imageStore = useImageStore()
if (!imageStore.loaded) {
    await imageStore.fill()
}

const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return galleries.getById(id)
    } catch (ex) {
        console.log(`failed to fetch gallery '${id}': ${ex}`)
    }
    return {}
})
const parent = computed(() => 'Parent TBA')
</script>
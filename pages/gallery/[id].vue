<template>
    <div>
        <GalleryItem :item="item" :parent="parent" />
    </div>
</template>

<script setup lang="ts">
const galleries = useGalleryStore()
if (!galleries.loaded) {
    await galleries.fill()
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
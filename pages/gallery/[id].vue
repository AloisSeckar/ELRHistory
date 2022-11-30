<template>
    <div>
        <ItemGallery :detail="true" :item="item" :images="images" :children="children" :parent="parent" />
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
const images = computed(() => useImageStore().getByGallery(item.value?.gallery_id))
const children = computed(() => useGalleryStore().getByParent(item.value?.gallery_id))
const parent = computed(() => 'Parent TBA')
</script>
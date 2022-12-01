<template>
    <div>
        <ItemGallery :detail="true" :item="item" />
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
</script>
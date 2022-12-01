<template>
    <div>
        <ItemGallery :detail="true" :item="item" />
    </div>
</template>

<script setup lang="ts">
const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return useGalleryStore().getById(id)
    } catch (ex) {
        console.log(`failed to fetch gallery '${id}': ${ex}`)
    }
    return {}
})
</script>
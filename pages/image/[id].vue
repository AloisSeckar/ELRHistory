<template>
    <div>
        <ItemImage :item="item" />
    </div>
</template>

<script setup lang="ts">
const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return useImageStore().getById(id)
    } catch (ex) {
        console.log(`failed to fetch image '${id}': ${ex}`)
    }
    return {}
})
</script>
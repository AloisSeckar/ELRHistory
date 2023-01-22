<template>
    <div>
        <ItemImage :item="item" />
    </div>
</template>

<script setup lang="ts">
import { Image } from '@/database/types';

const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return useImageStore().getById(id)
    } catch (ex) {
        console.error(`failed to fetch image '${id}': ${ex}`)
    }
    return {} as Image
})
</script>
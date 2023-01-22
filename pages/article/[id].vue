<template>
    <div>
        <ItemArticle :item="item" :detail="true" />
    </div>
</template>

<script setup lang="ts">
import { Article } from '@/database/types';

const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return useArticleStore().getById(id)
    } catch (ex) {
        console.error(`failed to fetch article '${id}': ${ex}`)
    }
    return {} as Article
})
</script>
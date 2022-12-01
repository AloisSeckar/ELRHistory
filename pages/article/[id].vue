<template>
    <div>
        <ItemArticle :item="item" :detail="true" />
    </div>
</template>

<script setup lang="ts">
const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return useArticleStore().getById(id)
    } catch (ex) {
        console.log(`failed to fetch article '${id}': ${ex}`)
    }
    return {}
})
</script>
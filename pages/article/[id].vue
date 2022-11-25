<template>
    <div>
        <ItemArticle :item="item" :detail="true" />
    </div>
</template>

<script setup lang="ts">
const articles = useArticleStore()
if (!articles.loaded) {
    await articles.fill()
}
const item = computed(() => {
    let id = null
    try {
        id = new Number(useRoute().params.id)
        return articles.getById(id)
    } catch (ex) {
        console.log(`failed to fetch article '${id}': ${ex}`)
    }
    return {}
})
</script>
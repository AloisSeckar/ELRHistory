<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> News
            </div>
            <div class="box-content">
                <div v-for="item in news.getItems">
                    <ItemNews :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const news = useNewsStore()
if (!news.loaded) {
    await news.fill()
}
</script>
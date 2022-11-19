<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> News
            </div>
            <div class="box-content">
                <div v-for="item in news">
                    <NewsItem :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const news = useNewsStore().getNews
</script>
<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> News
            </div>
            <div class="box-content">
                <div v-for="item in news">
                    <strong>{{ toDate(item.date_created) }}</strong> {{ item.content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const news = useNewsStore().getNews
</script>
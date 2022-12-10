<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" /> {{ text.getKey('news-title') }}
            </div>
            <div class="box-content">
                <div v-for="item in news.getItems">
                    <ItemNews :item="item" />
                </div>
                <div class="p-2" v-if="news.items.length < 1">{{ text.getKey('news-none') }}</div>
            </div>
        </div>
        <div class="-mt-2 text-lg">{{ text.getKey('news-total') }}: <strong>{{ news.getCount }}</strong></div>
    </div>
</template>

<script setup lang="ts">
const text = useTextStore()
const news = useNewsStore()
</script>


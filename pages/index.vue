<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="home" />&nbsp;&nbsp;{{ text.getKey('index-about') }}
            </div>
            <div class="box-content" v-html="text.getKey('index-welcome')">
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="envelope" />&nbsp;&nbsp;{{ text.getKey('index-contacts') }}
            </div>
            <div class="box-content">
                <div v-for="item in useContactStore().items">
                    <ItemContact :item="item" />
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" />&nbsp;&nbsp;{{ text.getKey('index-news') }}
            </div>
            <div class="box-content">
                <div v-for="item in useNewsStore().getTopItems">
                    <ItemNews :item="item" />
                </div>
                <div>
                    [ <NuxtLink to="/news">{{ text.getKey('index-news-all') }}</NuxtLink> ]
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const text = useTextStore()
</script>

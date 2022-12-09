<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="home" />&nbsp;&nbsp;{{ useTextStore().getKey('index-about') }}
            </div>
            <div class="box-content" v-html="useTextStore().getKey('index-welcome')">
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="envelope" />&nbsp;&nbsp;{{ useTextStore().getKey('index-contacts') }}
            </div>
            <div class="box-content">
                <div v-for="item in useContactStore().items">
                    <ItemContact :item="item" />
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" />&nbsp;&nbsp;{{ useTextStore().getKey('index-news') }}
            </div>
            <div class="box-content">
                <div v-for="item in useNewsStore().getTopItems">
                    <ItemNews :item="item" />
                </div>
                <div>
                    [ <NuxtLink to="/news">{{ useTextStore().getKey('index-news-all') }}</NuxtLink> ]
                </div>
            </div>
        </div>
    </div>
</template>

<template>
    <div>
        <div class="box">
            <div class="box-header">
                <fa icon="home" />&nbsp;&nbsp;About
            </div>
            <div class="box-content" v-html="useTextStore().getKey('welcome')?.value">
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="envelope" />&nbsp;&nbsp;Contacts
            </div>
            <div class="box-content">
                <div v-for="item in useContactStore().items">
                    <ItemContact :item="item" />
                </div>
            </div>
        </div>
        <div class="box">
            <div class="box-header">
                <fa icon="bullhorn" />&nbsp;&nbsp;News
            </div>
            <div class="box-content">
                <div v-for="item in useNewsStore().getTopItems">
                    <ItemNews :item="item" />
                </div>
                <div>
                    [ <NuxtLink to="/news">All news</NuxtLink> ]
                </div>
            </div>
        </div>
    </div>
</template>

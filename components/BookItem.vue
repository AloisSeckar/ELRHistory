<template>
    <div class="flex">
        <div class="flex-none w-32 p-2">
            <a :href="item.url" :title="item.name">
                <img :src="'/' + item.thumb" :title="item.name" :width="120" />
            </a>
        </div> 
        <div class="grow p-2 pl-4">
            <a :href="item.url" :title="item.name">
                <strong>{{ item.name }}</strong>
            </a>
            <br />
            <strong><em>{{ item.writer }}, {{ item.year }}</em></strong>
            <span v-if="item.review">&nbsp;&nbsp;<strong>[<a href="{{ item.review }}" title="Recenze díla">Recenze</a>]</strong></span>
            <br />
            {{ item.dscr }}
        </div>
    </div>
</template>
a
<script setup lang="ts">
defineProps({
    item: {type: Object, required: true}
})
</script>
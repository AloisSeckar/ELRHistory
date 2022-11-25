<template>
    <div class="flex">
        <div class="flex-none w-32 p-2">
            <a :href="item.url" :title="item.url">
                <img :src="'/' + item.thumb" :title="item.name" :width="120" />
            </a>
        </div> 
        <div class="grow p-2 pl-4 self-center">
            <a :href="item.url" :title="item.url">
                <strong>{{ item.name }}</strong>
            </a>
            <br />
            {{ item.dscr }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: {type: Object, required: true}
})
</script>
<template>
    <div class="flex">
        <div class="flex-none w-44">
            <strong>{{ toDate(item.date_created) }}</strong> {{ item.elrh_author?.name }}
        </div> 
        <div class="grow pl-4">
            {{ item.content }}
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    item: {type: Object, required: true}
})
</script>
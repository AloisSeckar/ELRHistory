<template>
    <div class="flex">
        <div class="flex-none w-44">
            <strong>{{ toDate(item.dateCreated) }}</strong> {{ item.elrhAuthor?.name }}
        </div> 
        <div class="grow pl-4">
            {{ item.content }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { News } from '@/database/types'
import { PropType } from 'vue'

defineProps({
    item: {type: Object as PropType<News>, required: true}
})
</script>
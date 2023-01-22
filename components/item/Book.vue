<template>
    <div class="flex">
        <div class="flex-none w-32 p-2">
            <a :href="item.url" :title="item.name">
                <img class="thumb" :src="item.thumb" :alt="item.name" :title="item.name" />
            </a>
        </div> 
        <div class="grow p-2 pl-4">
            <a :href="item.url" :title="item.name">
                <strong>{{ item.name }}</strong>
            </a>
            <br />
            <strong><em>{{ item.writer }}, {{ item.year }}</em></strong>
            <span v-if="item.review">&nbsp;&nbsp;<strong>[<a href="{{ item.review }}" title="Recenze díla">{{ text.getKey('book-review') }}</a>]</strong></span>
            <br />
            {{ item.dscr }}
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Book } from '@/database/types'
import { PropType } from 'vue'

defineProps({
    item: {type: Object as PropType<Book>, required: true}
})

const text = useTextStore()
</script>
<template>
    <div class="flex">
        <div class="grow">
            <strong>{{ item.name }}</strong>
        </div> 
        <div class="grow">
            {{ item.email }}
        </div>
        <div class="grow">
            {{ item.phone }}
        </div>
        <div class="grow">
            <NuxtLink :to="item.fb" :external="true" :title=" item.name + ' - Facebook'" class="text-xl">
                <fa icon="fab fa-facebook-square" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Contact } from '@/composables/useContactStore'
import { PropType } from 'vue'

defineProps({
    item: {type: Object as PropType<Contact>, required: true}
})
</script>
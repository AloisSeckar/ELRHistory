<template>
    <div>
        <div v-if="user">
            <div class="text-xl font-bold">Authorized user:</div>
            <div class="mb-4">
                {{ user }}
            </div>
            <div>
                <div class="inline w-32">
                    <ul class="list-disc ml-6 mb-2">
                        <li><NuxtLink to="/admin/add/article">Add new article</NuxtLink></li>
                        <li><NuxtLink to="/admin/add/book">Add new book</NuxtLink></li>
                        <li><NuxtLink to="/admin/add/gallery">Add new gallery</NuxtLink></li>
                        <li><NuxtLink to="/admin/add/image">Add new image</NuxtLink></li>
                        <li><NuxtLink to="/admin/add/link">Add new link</NuxtLink></li>
                        <li><NuxtLink to="/admin/add/news">Add new news</NuxtLink></li>
                    </ul>
                </div>
                <div class="inline w-32">

                </div>
            </div>
        </div>
        <div v-else>
            Unauthorized (please, login to view the page)
        </div>
    </div>
</template>

<script setup lang="ts">
const user = computed(() => useLoginStore().user)
</script>
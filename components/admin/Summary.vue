<template>
  <div>
    <div v-if="user">
      <div class="text-xl font-bold">
        Authorized user:
      </div>
      <div class="mb-4">
        {{ user }}
      </div>
      <div>
        <div class="inline w-32">
          <ul class="list-disc ml-6 mb-2">
            <li>
              <NuxtLink to="/admin/add/article">
                Add new article
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/article/first">
                Edit articles
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/book">
                Add new book
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/book/first">
                Edit books
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/gallery">
                Add new gallery
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/gallery/first">
                Edit galleries
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/image">
                Add new image
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/image/first">
                Edit images
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/link">
                Add new link
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/link/first">
                Edit links
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/news">
                Add new news
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/news/first">
                Edit news
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/timeline">
                Add new timeline item
              </NuxtLink>
              /
              <NuxtLink to="/admin/edit/timeline/first">
                Edit timeline items
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="inline w-32" />
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

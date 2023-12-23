<template>
  <div>
    <div v-if="user">
      <div class="text-xl font-bold">
        {{ $t('admin.user') }}
      </div>
      <div class="mb-4">
        {{ user }}
      </div>
      <div>
        <div class="inline-block w-48">
          <ul class="list-disc ml-6 mb-2">
            <li>
              <NuxtLink to="/admin/add/article">
                {{ $t('admin.add.article') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/book">
                {{ $t('admin.add.book') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/gallery">
                {{ $t('admin.add.gallery') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/image">
                {{ $t('admin.add.image') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/link">
                {{ $t('admin.add.link') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/news">
                {{ $t('admin.add.news') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/add/timeline">
                {{ $t('admin.add.timeline') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="inline-block w-48">
          <ul class="list-disc ml-6 mb-2">
            <li>
              <NuxtLink to="/admin/edit/article/first">
                {{ $t('admin.edit.article') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/book/first">
                {{ $t('admin.edit.book') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/gallery/first">
                {{ $t('admin.edit.gallery') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/image/first">
                {{ $t('admin.edit.image') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/link/first">
                {{ $t('admin.edit.link') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/news/first">
                {{ $t('admin.edit.news') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/edit/timeline/first">
                {{ $t('admin.edit.timeline') }}
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

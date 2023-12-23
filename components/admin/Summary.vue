<template>
  <div>
    <div v-if="user">
      <h2>{{ $t('admin.user') }}</h2>
      <div class="mb-4">
        {{ user }}
      </div>
      <h2>{{ $t('admin.content') }}</h2>
      <div>
        <div class="inline-block w-48">
          <ul class="list-disc ml-6 mb-2">
            <AdminManageLink action="add" item="article" />
            <AdminManageLink action="add" item="book" />
            <AdminManageLink action="add" item="gallery" />
            <AdminManageLink action="add" item="image" />
            <AdminManageLink action="add" item="link" />
            <AdminManageLink action="add" item="news" />
            <AdminManageLink action="add" item="timeline" />
          </ul>
        </div>
        <div class="inline-block w-48">
          <ul class="list-disc ml-6 mb-2">
            <AdminManageLink action="edit" item="article" />
            <AdminManageLink action="edit" item="book" />
            <AdminManageLink action="edit" item="gallery" />
            <AdminManageLink action="edit" item="image" />
            <AdminManageLink action="edit" item="link" />
            <AdminManageLink action="edit" item="news" />
            <AdminManageLink action="edit" item="timeline" />
          </ul>
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

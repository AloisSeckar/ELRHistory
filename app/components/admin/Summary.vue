<template>
  <div>
    <div v-if="user">
      <h2>{{ $t('admin.user') }}</h2>
      <div class="mb-4">
        {{ user }}
      </div>
      <h2>{{ $t('admin.content') }}</h2>
      <div>
        <div class="inline-block w-60">
          <ul class="list-disc ml-6 mb-2">
            <AdminLinkText action="add" item="article" />
            <AdminLinkText action="add" item="book" />
            <AdminLinkText action="add" item="gallery" />
            <AdminLinkText action="add" item="image" />
            <AdminLinkText action="add" item="link" />
            <AdminLinkText action="add" item="news" />
            <AdminLinkText action="add" item="timeline" />
          </ul>
        </div>
        <div class="inline-block w-60">
          <ul class="list-disc ml-6 mb-2">
            <AdminLinkText action="edit" item="article" />
            <AdminLinkText action="edit" item="book" />
            <AdminLinkText action="edit" item="gallery" />
            <AdminLinkText action="edit" item="image" />
            <AdminLinkText action="edit" item="link" />
            <AdminLinkText action="edit" item="news" />
            <AdminLinkText action="edit" item="timeline" />
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

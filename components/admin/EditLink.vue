<template>
  <div class="inline-block px-2">
    <NuxtLink :to="{ path: '/admin/edit/' + link }">
      <span :title="useTAdminEdit(item)">
        <BaseIcon icon="wrench" size="1.125rem" css-class="mb-1.5 text-green-500 hover:text-yellow-400" />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  link: { type: String, required: true },
  item: { type: String, default: 'item' }
})
</script>

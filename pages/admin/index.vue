<template>
  <div>
    <AdminSummary />
    <FormKit type="form" submit-label="Logout" @submit="attemptLogout" />
  </div>
</template>

<script setup lang="ts">
function attemptLogout () {
  useLoginStore().logout()
  return navigateTo('/')
}
</script>

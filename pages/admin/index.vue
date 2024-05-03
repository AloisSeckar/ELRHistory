<template>
  <div>
    <AdminSummary />
    <FormKit type="form" :submit-label="useT('login.logout')" @submit="attemptLogout" />
  </div>
</template>

<script setup lang="ts">
function attemptLogout() {
  useLoginStore().logout()
  return navigateTo('/')
}
</script>

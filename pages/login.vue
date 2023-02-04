<template>
  <div>
    <div />
    <div v-if="user">
      <AdminSummary />
      <FormKit type="form" submit-label="Logout" @submit="attemptLogout" />
    </div>
    <div v-else>
      <div class="text-xl font-bold">
        Přihlásit:
      </div>
      <FormKit type="form" submit-label="Login" @submit="attemptLogin">
        <FormKit
          id="email"
          v-model="email"
          type="text"
          name="email"
          label="E-mail:"
          validation="required"
        />
        <FormKit
          id="password"
          v-model="password"
          type="password"
          name="password"
          label="Password:"
          validation="required"
        />
      </FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ''
const password = ''

const user = computed(() => useLoginStore().user)

async function attemptLogin () {
  await useLoginStore().login(email, password)
}
async function attemptLogout () {
  await useLoginStore().logout()
}
</script>

<template>
  <div>
    <div class="text-xl font-bold">
      {{ $t("login.title") }}
    </div>
    <FormKit type="form" :submit-label="useT('login.login')" @submit="attemptLogin">
      <FormKit
        id="email"
        v-model="email"
        type="text"
        name="email"
        :label="useT('login.email')"
        validation="required"
      />
      <FormKit
        id="password"
        v-model="password"
        type="password"
        name="password"
        :label="useT('login.pass')"
        validation="required"
        :autocomplete="true"
      />
    </FormKit>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

async function attemptLogin () {
  await useLoginStore().login(email.value, password.value)
  const callbackUrl = useLoginStore().callbackUrl
  if (useLoginStore().user && callbackUrl) {
    useLoginStore().callbackUrl = ''
    return navigateTo(callbackUrl)
  } else {
    return navigateTo('/admin')
  }
}
</script>

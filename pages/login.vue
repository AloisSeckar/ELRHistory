<template>
    <div>
        <div>
        </div>
        <div v-if="user">
            <AdminSummary />
            <FormKit type="form" @submit="attemptLogout" submit-label="Logout" />
        </div>
        <div v-else>
            <div class="text-xl font-bold">Přihlásit:</div>
            <FormKit type="form" @submit="attemptLogin" submit-label="Login">
                <FormKit
                    type="text" name="email" id="email"
                    label="E-mail:" validation="required"
                    v-model="email" />
                <FormKit
                    type="password" name="password" id="password"
                    label="Password:" validation="required"
                    v-model="password" />
            </FormKit>
        </div>
    </div>
</template>

<script setup lang="ts">
let email = ''
let password = ''

const user = computed(() => useLoginStore().user)

async function attemptLogin() {
    useLoginStore().login(email, password)
}
async function attemptLogout() {
    useLoginStore().logout()
}
</script>

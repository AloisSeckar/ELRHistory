<template>
    <div>
        <div>
        </div>
        <div v-if="user">
            <div :class="header">Přihlášený uživatel:</div>
            <div>
                {{ user }}
            </div>
            <FormKit type="form" @submit="attemptLogout" submit-label="Logout" />
        </div>
        <div v-else>
            <div :class="header">Přihlásit:</div>
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
const header = "text-xl font-bold"
const button = "p-1 border border-black bg-navy text-silver"

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

<style scoped>
.formkit-input {
    /* otherwise style from tailwind.css is ignored */
    /* TODO study and apply https://formkit.com/guides/create-a-tailwind-theme */
    display: inline-block;
}
</style>
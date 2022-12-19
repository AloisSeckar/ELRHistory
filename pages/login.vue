<template>
    <div>
        <div>
        </div>
        <div v-if="user">
            <div :class="header">Přihlášený uživatel:</div>
            <div>
                {{ user }}
            </div>
            <button :class="button" @click="attemptLogout()">Logout</button>
        </div>
        <div v-else>
            <div :class="header">Přihlásit:</div>
            <div>
                <label>E-mail: </label>
                <input type="text" name="email" v-model="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" v-model="password" />
            </div>
            <button :class="button" @click="attemptLogin()">Login</button>
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
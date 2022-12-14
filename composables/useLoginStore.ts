export const useLoginStore = defineStore({
    id: 'login-store',
    state: () => {
        return {
            user: '',
        }
    },
    actions: {
        async login(email: string, password: string) {
            const { data, error } = await useSupabaseClient().auth.signInWithPassword({ email, password })
            console.log(data)

            if (data) {
                console.log(data)
                console.log(data.user?.email)
                if (data.user?.email) {
                    this.user = data.user.email 
                } else {
                    console.error('User undefined!')
                }
            } else {
                console.error(error)
            }
        },
        logout() {
            this.user = ''
        }
    },
    getters: {
    }
})
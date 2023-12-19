type UserInfo = {
  user: string | null,
  callbackUrl: string | null
}

export const useLoginStore = defineStore({
  id: 'login-store',
  state: () => {
    return {
      user: null,
      callbackUrl: null
    } as UserInfo
  },
  actions: {
    async login (email: string, password: string) {
      const { data, error } = await useSupabaseClient().auth.signInWithPassword({ email, password })
      if (data) {
        if (data.user?.email) {
          this.user = data.user.email
          useSessionStorage('elrh-user', data.user.email, { mergeDefaults: true })
        } else {
          console.error('User undefined!')
        }
      } else {
        console.error(error)
      }
    },
    logout () {
      const user = useSessionStorage('elrh-user', null)
      user.value = this.user = null
    },
    checkLogin () {
      const user = useSessionStorage('elrh-user', this.user)
      this.user = user.value
      return !!user.value
    }
  },
  getters: {
  }
})

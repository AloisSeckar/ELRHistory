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
          const ses = useSessionStorage('elrh-user', data.user.email, { mergeDefaults: true })
          console.warn(ses.value)
        } else {
          console.error('User undefined!')
        }
      } else {
        console.error(error)
      }
    },
    logout () {
      this.user = null
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

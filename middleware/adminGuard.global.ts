export default defineNuxtRouteMiddleware((to) => {
  const authorized = useLoginStore().checkLogin()
  if (to.path.includes('admin') && !authorized) {
    useLoginStore().callbackUrl = to.path
    return navigateTo('/login')
  } else if (to.path.includes('login') && authorized) {
    return navigateTo('/admin')
  }
})

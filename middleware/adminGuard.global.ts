export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes('admin') && !(useLoginStore().user)) {
    useLoginStore().callbackUrl = to.path
    return navigateTo('/login')
  }
})

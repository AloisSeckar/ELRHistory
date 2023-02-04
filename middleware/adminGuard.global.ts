export default defineNuxtRouteMiddleware((to) => {
  if (to.path.includes('admin') && !(useLoginStore().user)) {
    // TODO remember original page and auto-redirect after login
    return navigateTo('/login')
  }
})

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      textTitle: 'ELRHistory',
      textAuthorName: 'Alois Sečkár',
      textAuthorWebsite: 'http://alois-seckar.cz/',
    }
  },
})

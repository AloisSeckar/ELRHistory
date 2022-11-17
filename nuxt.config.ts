// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  buildModules: [
    '@pinia/nuxt'
  ],
  modules: [
    '@nuxtjs/supabase',
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

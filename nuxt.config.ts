// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ]
  ],
  runtimeConfig: {
    public: {
      textTitle: 'ELRHistory'
    }
  }
})

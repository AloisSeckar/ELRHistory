// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
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

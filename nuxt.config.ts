// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@formkit/nuxt',
  ],
  runtimeConfig: {
    public: {
      textTitle: 'ELRHistory',
    }
  },
})

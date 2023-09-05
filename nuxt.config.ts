// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    // '@nuxtjs/html-validator', // TODO figure out how to use SSR + i18n correctly
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  runtimeConfig: {
    // here goes defaults for runtime env variables
  }
})

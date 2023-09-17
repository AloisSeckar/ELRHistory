// https://nuxt.com/docs/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    ['@pinia/nuxt', { autoImports: ['defineStore'] }]
  ],
  runtimeConfig: {
    // here goes defaults for runtime env variables
  },
  image: {
    // configuration for NuxtImage modules
    presets: {
      thumb: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 120,
          height: 80
        }
      }
    }
  }
})

export default defineNuxtConfig({
  ssr: false,
  devtools: {
    enabled: false
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@pinia/nuxt'
  ],
  runtimeConfig: {
    public: {
      lang: 'en',
      // TODO allow following to be admin-edited
      webTitle: 'ELRHistory',
      webAbout: 'This is a welcome text displayed on the index page.<br /><br />It can be <strong>HTML <span style="color: red">formatted</span></strong>.',
      footerAuthor: 'Alois Sečkár',
      footerLink: 'https://alois-seckar.cz/'
    }
  },
  image: {
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
  },
  supabase: {
    redirect: false
  }
})

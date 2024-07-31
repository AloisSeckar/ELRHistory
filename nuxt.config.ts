export default defineNuxtConfig({
  ssr: false,

  devtools: {
    enabled: false,
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/cloudinary',
    '@nuxtjs/i18n',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    '@pinia/nuxt',
  ],

  eslint: {
    config: {
      stylistic: true,
    },
  },

  runtimeConfig: {
    public: {
      lang: 'en',
      debug: false,
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/dxn3gzvtm/image/upload/',
        preset: 'elrhistory',
        folder: 'elrhistory',
      },
      // TODO allow following to be admin-edited
      webTitle: 'ELRHistory',
      webAbout: 'This is a welcome text displayed on the index page.<br /><br />It can be <strong>HTML <span style="color: red">formatted</span></strong>.',
      webAuthor: 'Alois Sečkár',
      webLink: 'https://alois-seckar.cz/',
    },
  },

  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dxn3gzvtm/image/upload/',
    },
    presets: {
      thumb: {
        modifiers: {
          fit: 'cover',
          format: 'jpg',
          width: 120,
          height: 80,
        },
      },
    },
  },

  supabase: {
    redirect: false,
  },

  compatibilityDate: '2024-07-31',
})
export default defineNuxtConfig({

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

  ssr: false,

  devtools: {
    enabled: false,
  },

  runtimeConfig: {
    public: {
      // default language
      lang: 'en',
      // excessive logging
      debug: false,
      // config for image provider
      cloudinary: {
        baseURL: 'https://res.cloudinary.com/dxn3gzvtm/image/upload/',
        preset: 'elrhistory',
        folder: 'elrhistory',
      },
      // fallback config for site description
      webTitle: 'ELRHistory',
      webAbout: 'This is a welcome text displayed on the index page.<br /><br />It can be <strong>HTML <span style="color: red">formatted</span></strong>.',
      webAuthor: 'Alois Sečkár',
      webLink: 'https://alois-seckar.cz/',
    },
  },

  compatibilityDate: '2024-11-06',

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('pinia') || id.includes('Pinia')) {
              return 'pinia'
            }
          },
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts',
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
})

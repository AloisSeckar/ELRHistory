export default defineNuxtConfig({

  extends: [
    'nuxt-ignis',
  ],

  modules: [
    '@nuxtjs/cloudinary',
  ],

  runtimeConfig: {
    public: {
      // default language
      lang: 'en',
      // excessive logging
      debug: false,
      // config for image provider
      cloudinary: {
        baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
        preset: 'elrhistory',
        folder: 'elrhistory',
      },
      // fallback config for site description
      webTitle: 'ELRHistory',
      webAbout: 'This is a welcome text displayed on the index page.<br /><br />It can be <strong>HTML <span style="color: red">formatted</span></strong>.',
      webAuthor: 'Alois Sečkár',
      webLink: 'https://alois-seckar.cz/',
      // map page background image (TODO move to database?)
      mapImage: '/map.jpg',
      mapImageWidth: 1000,
      mapImageHeight: 600,
    },
  },

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

  // for now this is required override of Nuxt Ignis default i18n config
  // TODO config should be extensible (has to be solved in upstream)
  // https://github.com/AloisSeckar/ELRHistory/issues/201
  i18n: {
    vueI18n: './elrhistory-i18n.config.ts',
  },

  image: {
    cloudinary: {
      baseURL: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/`,
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

  // required to allow images from Cloudinary
  security: {
    headers: {
      contentSecurityPolicy: {
        'img-src': ['\'self\'', 'https://res.cloudinary.com/'],
      },
    },
  },

})

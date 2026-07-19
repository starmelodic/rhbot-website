import dotenv from 'dotenv'
dotenv.config()

export default defineNuxtConfig({
  compatibilityDate: '2026-07-18',
  devtools: { enabled: true },
  
  css: ['~/assets/css/main.css'],
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: 'first',
    viewer: true,
  },
  
  icon: {
    serverBundle: 'local',
    clientBundle: 'local',
    size: '24px',
    collections: ['heroicons']
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  
  app: {
    head: {
      title: 'RH BOT - Otomatisasi WhatsApp Cerdas untuk Bisnis',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'RH BOT: Solusi otomatisasi WhatsApp untuk bisnis modern. Kirim pesan massal, auto-reply, dan integrasi API.' },
        { name: 'theme-color', content: '#1A2A6C' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  nitro: {
    preset: 'node-server'
  },

  runtimeConfig: {
    public: {
      // public variables
    },
    databaseUrl: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    PORT: process.env.PORT,
  },

  features: {
    inlineStyles: false,
  },

  nitro: {
    routeRules: {
      '/**': { prerender: true }
    }
  }
})
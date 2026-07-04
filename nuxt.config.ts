export default defineNuxtConfig({
  compatibilityDate: '2026-07-01',

  devtools: { enabled: true },

  ssr: true,

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  fonts: {
    families: [
      { name: 'Unbounded', provider: 'google', weights: [500, 700, 900] },
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700] },
      { name: 'JetBrains Mono', provider: 'google', weights: [400, 500, 600] }
    ]
  },

  css: ['~/assets/styles/main.scss'],

  components: [{ path: '~/components', pathPrefix: false }],

  app: {
    baseURL: '/',
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },

  site: {
    url: 'https://nikitakashin.github.io',
    name: 'Nikita Kashin — Frontend Architect'
  },

  i18n: {
    baseUrl: 'https://nikitakashin.github.io',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'ru', language: 'ru-RU', file: 'ru.json', name: 'Русский' }
    ],
    detectBrowserLanguage: false
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'nuxt-color-mode'
  },

  image: {
    format: ['avif', 'webp']
  },

  robots: {
    sitemap: '/sitemap.xml'
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/ru']
    }
  },

  typescript: {
    strict: true
  },

  vite: {
    optimizeDeps: {
      include: ['@lucide/vue']
    }
  }
})

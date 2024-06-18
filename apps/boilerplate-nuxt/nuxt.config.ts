// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/i18n',
  ],
  components: [
    {
      path: '~/components',
      extensions: ['.component.vue'],
    },
  ],
  pinia: {
    storesDirs: ['./stores/**.store.ts'],
  },
  i18n: {
    vueI18n: './config/i18n.config.ts', // if you are using custom path, default
  },
  tailwindcss: {
    cssPath: [
      '~/assets/css/tailwind.css',
      {
        injectPosition: 'first',
      },
    ],
    configPath: './tailwind.config.js',
  },
});

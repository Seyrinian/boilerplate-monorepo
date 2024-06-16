// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@nuxtjs/eslint-module'],
  components: [
    {
      path: '~/components',
      extensions: ['.component.vue'],
    },
  ],
  imports: { dirs: ['~/types/**/*.ts'] },
  typescript: {
    typeCheck: true,
  },
  pinia: {
    storesDirs: ['./stores/**.store.ts'],
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

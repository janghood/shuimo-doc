// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extensions: ['.md'],
  modules: ['./modules/markdown', './modules/fontmin',]
})

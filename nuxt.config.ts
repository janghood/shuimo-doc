import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/style/index.scss',
    'shuimo-ui/dist/style.css'
  ],
  extensions: ['.md'],
  modules: ['./modules/markdown', './modules/fontmin',]
})

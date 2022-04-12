import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  alias:{
    '/lib':'/wash-painting-ui/lib'
  },
  css: [
    '@/assets/style/index.scss'
  ],
  privateRuntimeConfig: {
    API_BASE: process.env.SERVER_API_BASE
  },
  publicRuntimeConfig: {
    API_BASE: process.env.CLIENT_API_BASE
  },
  extensions:['.md'],
  modules:[
    './modules/markdown'
  ],
})

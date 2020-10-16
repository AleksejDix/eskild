
const path = require('path');
export default {

  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'de',
    },
    titleTemplate: '%s - Podologische Praxis E. Sörensen',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Quicksand:300,400,700&display=swap'
      }
    ]

  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/global.js', 
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-purgecss',
    '@nuxt/content'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  purgeCSS: {
   // your settings here
    whitelist: ['nuxt-progress'],
    whitelistPatterns: [/page$/],
  },
  axios: {
  },
  /*
  ** Build configuration
  */
  markdownit: {
    injected: true,
  },
  build: {
    extractCSS: true,
  }
}

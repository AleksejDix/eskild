
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
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/markdownit',
    'nuxt-purgecss'
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, "content"),
        loader: "frontmatter-markdown-loader",
      });

    }
  },
  generate: {
    routes: function() {
      const fs = require('fs');
      return fs
        .readdirSync('./content/blog/posts')
        .map(file => {
          return {
            route: `/blog/${file.slice(2, -5)}`, // Remove the .json from the end of the filename
            payload: require(`./content/blog/posts/${file}`),
          };
        });
    },
  },
}

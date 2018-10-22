module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'corporative-site-layout',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,400i,700,700i,900%7CRoboto:300,400,700,900%7CCousine:400,700' },
    ],
    script: [
      { src: 'https://apis.google.com/js/api:client.js' },
      { src: 'https://apis.google.com/js/platform.js', defer: true }
    ]
  },
  env: {
    HOST_URL: process.env.BASE_URL || 'http://localhost:3000',
    CMS_API_URL: 'http://localhost:4000/api'
  },
  css: [
    { src: '@/assets/styles/index.scss', lang: 'scss' }
    // "@typopro/web-bebas-neue/TypoPRO-BebasNeue.css"
    // '~assets/styles/variables.scss',
    // 'bootstrap-vue/dist/bootstrap-vue.css',
    // 'bootstrap/scss/bootstrap.scss'
  ],
  plugins: [
    'plugins/bootstrap-vue.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#00354b' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios'],
    watch: ['~/server/*.js'],
    dev: true,
    extractCSS: {
      allChunks: true
    },
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  },
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/variables.scss'],
    ['bootstrap-vue/nuxt', { css: false }]
  ],
  serverMiddleware: [
    '~/server/index.js'
  ]
};

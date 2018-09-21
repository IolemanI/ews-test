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
    ]
  },
  css: [
    '~assets/styles/index.scss',
    'bootstrap-vue/dist/bootstrap-vue.css'
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
    ['bootstrap-vue/nuxt', { css: false }]
  ]
};

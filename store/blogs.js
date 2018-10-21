import axios from 'axios'

const state = () => ({
  list: []
})

const getters = {

}

const mutations = {
  setBlogPosts (state, blogPosts) {
    state.list = blogPosts
  }
}

const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}



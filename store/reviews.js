import axios from 'axios'
import {getReviews} from "./api-helper";

const state = () => ({
  list: []
})


const getters = {
}

const mutations = {
  setReviews (state, reviews) {
    console.log('==> commit reviews', reviews)
    state.list = reviews
  }
}

const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit ({ commit }, { req }) {

  },
  async fetchReviews ({commit}) {
    try {
      console.log('==> fetchReviews')
      const reviews = await getReviews()
      console.log('==> fetchReviews reviews:', reviews)


      commit('setReviews', reviews)
    } catch (error) {
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}

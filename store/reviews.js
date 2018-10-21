import axios from 'axios'
import {getReviews} from "./api-helper";

const state = () => ({
  list: []
})


const getters = {
}

const mutations = {
  setReviews (state, reviews) {
    state.list = reviews
  }
}

const actions = {
  nuxtServerInit ({ commit }, { req }) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}

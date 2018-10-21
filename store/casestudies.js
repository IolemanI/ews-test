import {getCaseStudies} from './api-helper'

const state = () => {
  list: []
}

const getters = {

}

const mutations = {
  setCaseStudies (state, cs) {
    state.list = cs
  }
}

const actions = {
  async nuxtServerInit({commit}, {req}) {

  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}

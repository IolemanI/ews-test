import {getCaseStudies} from './api-helper'

const state = () => {
  list: []
}

const getters = {

}

const mutations = {
  setCaseStudies (state, cs) {
    console.log('==> commit', cs)
    state.list = cs
  }
}

const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  async nuxtServerInit({commit}, {req}) {

  },
  async fetchCaseStudies ({commit}) {
    try {
      console.log('==> fetchCaseStudies')
      const caseStudies = await getCaseStudies()
      commit('setCaseStudies', caseStudies)

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

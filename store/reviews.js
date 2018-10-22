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

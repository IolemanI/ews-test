import Vue from "vue"
import Vuex from "vuex"
import caseStudies from "./casestudies"
import blogs from "./blogs"
import reviews from "./reviews"

Vue.use(Vuex);

export const store = () => {
  return new Vuex.Store({
    state: {

    },
    modules: {
      caseStudies,
      blogs,
      reviews
    }
  })
}

export default store

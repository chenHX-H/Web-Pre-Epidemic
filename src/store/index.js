import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse:false
  },
  mutations: {
    collaspseAll(state){
        state.collapse= !state.collapse
    }
  },
  actions: {
  },
  modules: {
  }
})

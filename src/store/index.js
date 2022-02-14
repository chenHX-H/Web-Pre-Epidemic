import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse:false,
    userInfo:{
      email:"",
      username:"admin",
      lastTime:"2022年2月14日-23点47分",
      lastArea:"重庆市"
    }
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

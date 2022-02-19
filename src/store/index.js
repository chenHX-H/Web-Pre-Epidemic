import { createStore } from 'vuex'

export default createStore({
  state: {
    collapse:false,
    userInfo:{
      email:"",
      username:"admin",
      lastTime:"2022年2月14日-23点47分",
      lastArea:"重庆市"
    },
    mapInfo:{
      location:['中华人民共和国'],
      adcode:100000
    }
  },
  getters:{
    getLocation(state){
      return state.mapInfo.location
    }
  },
  mutations: {
    collaspseAll(state){
        state.collapse= !state.collapse
    },
    updateAdcode(state,code){
      state.mapInfo.adcode=code
    }
    
    

  },
  actions: {
  },
  modules: {
  }
})

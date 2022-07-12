import { createStore } from 'vuex'




export default createStore({
  state: {
    posts: null
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getPosts:context=>{
      fetch('http://localhost:3000/Data')
      .then((res) => res.json())
      .then((data) => context.state.posts = data)
    }
  },
  modules: {
  }
})

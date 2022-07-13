import { createStore } from 'vuex'




export default createStore({
  state: {
    posts: null,
    post: null
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts){
        state.posts = posts
    },
    setPost(state, post){
        state.post = post
    }
  },
  actions: {
    getPost(context, id) {
      fetch('http://localhost:3000/Data/' + id)
      .then((res) => res.json())
      .then((data) => {
        context.commit('setPost', data)
      })    
    },
    getPosts(context){
      fetch('http://localhost:3000/Data')
      .then((res) => res.json())
      .then((data) => {
        context.commit('setPosts', data)
      })
    }
  },
  modules: {
  }
})

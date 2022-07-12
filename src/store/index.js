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
    getPost(context, payload) {
      context.commit('setPost', payload.post)
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

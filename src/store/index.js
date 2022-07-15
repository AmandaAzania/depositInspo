import { createStore } from 'vuex'
export default createStore({
  state: {
    posts: null,
    post: null,
    user: null
  },
  getters: {
  },

  mutations: {
    setPosts(state, posts){
        state.posts = posts
    },

    setPost(state, post){
        state.post = post
    },

    setUser(state, user){
      state.user = user
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
    },

    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },
  },
  
  modules: {
  }
})
import { createStore } from 'vuex'




export default createStore({
  state: {
    posts: null,
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts){
      state.posts = posts
    },
   
  },
  actions: {
    getPosts:context=>{
      fetch('http://localhost:3000/Data')
      .then((res) => res.json())
      .then((data) => context.commit('setPosts' ,data))
    },
    addPost:(context,post)=>{
    
      fetch('http://localhost:3000/Data',{
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(res =>  res.json())
      .then(() => context.dispatch("getPosts"))
    }
  },
  modules: {
  }
})




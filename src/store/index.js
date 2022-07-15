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
    addPost:(context,post)=>{
    
      fetch('http://localhost:3000/Data',{
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then(res =>  res.json())
      .then(()=> context.dispatch("getPosts"))
    },


    login: async (context, payload) => {
      const { email, password } = payload;

      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("setUser", userData[0]);
    },

    deletPost:(context , id) => {
      fetch ("http://localhost:3000/Data/" + id, {
        method:"Delete",
      }).then(() => context.dispatch("getPosts"));
    },
    editPost:(context , Data) => {
      fetch("http://localhost:3000/Data/" + Data.id, {
        method: "PUT",
        body:JSON.stringify(Data),
        headers : {
          "content-type": "application/json; charset=UTF-8",
        },

      })
      .then((response) => response.json())
        .then(() => context.dispatch("getPost"));
    }
  },
  modules: {
  }
})




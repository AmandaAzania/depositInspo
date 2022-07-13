import { createStore } from 'vuex'
// import Vue from 'vue';
// import Vuex from 'vuex';
import db from 'db.json';

// Vue.useAttrs(Vuex);

export default createStore({
  state: {
    users: [],
    currentUser: {name: 'Text User'}
  },
  

  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGOUT_USER(state) {
      state.currentUser = {}
      window.localStorage.currentUser = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
  },

  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const userData = await response.json();
      context.commit("user", userData[0]);
    },
    register: (context, payload) => {
      const { name, email, password } = payload;
      fetch("", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("user", json));
    }},
  
  modules: {
  }
})


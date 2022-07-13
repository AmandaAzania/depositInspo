<template>
  <div class="container">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
    <button type="submit">Login</button>
    </form>
    <div v-if="user">Welcome {{ user.username }}
        <router-link to="/posts">
                <button type="submit">explore</button>
                </router-link>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
    logout(){
        
    }
  },
};
</script>
<style>

.container{
  min-width: 100vw;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #068282;
  padding-top: 100px;

}
  /* display: flex;
  flex-flow: column wrap;
  justify-content: center; */
</style>
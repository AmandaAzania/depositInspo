<template>
<div class="container">
  <form @submit.prevent="register">
    <input type="text" v-model="name" placeholder="Full Name" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="text" v-model="password" placeholder="password" />
    <button type="submit">Register</button>
  </form>
  <div v-if="user">Welcome {{ user.name }}</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
    },
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
  background-image: url('./images/aa');
  background-repeat: no-repeat;
  background-size: cover;
}
  /* display: flex;
  flex-flow: column wrap;
  justify-content: center; */
</style>
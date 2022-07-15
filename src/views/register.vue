<template>
<div class="container">
  <form @submit.prevent="register">
    <input type="text" v-model="name" placeholder="Full Name" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="text" v-model="password" placeholder="password" />
    <button type="submit">Register</button>
  </form>
  <div v-if="user"><p>You are successfully registred !!</p> <span>{{ user.name }} </span>

   <router-link to="/posts">
                <button class="btn-grad2" type="submit">See your pins</button>
                </router-link>
  
  </div>

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
background-image: url("../assets/Gear-Polaroid-Now-Plus-1.png");
  background-repeat: no-repeat;
  background-size: cover;


}
p {
  color: green;
  font-weight: bold;
}

@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&family=Oleo+Script+Swash+Caps&display=swap');

          .btn-grad2  {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(105, 1, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

span{
  font-size: 16px;
  font-weight: bold;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(105, 1, 1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 10px;
}

</style>
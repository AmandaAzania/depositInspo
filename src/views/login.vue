<template>
  <div class="container">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
    <button type="submit">Login</button>
    </form>
    <div v-if="user">Welcome <span>{{ user.username }}</span>
        <router-link to="/posts">
                <button class="btn-grad1" type="submit">See your pins</button>
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

  background-image: url('./images/aa');
  background-repeat: no-repeat;
  background-size: cover;

}


         
         .btn-grad1 {
            background-image: linear-gradient(to right, #348F50 0%, #56B4D3  51%, #348F50  100%);
            margin-left: 41rem;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad1:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
@import url('https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&family=Oleo+Script+Swash+Caps&display=swap');

          span {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 77, 105));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}
         

</style>
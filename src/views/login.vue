<template>
<Navbar/>
  <div class="container">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
    <button type="submit">Login</button>
    </form>
    <div v-if="user">Welcome <span>{{ user.name }}</span>
        <router-link to="/posts">
                <button class="btn-grad1" type="submit">See your pins</button>
                </router-link>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: { Navbar },
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
<style scoped>

.container{
  min-width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #068282;
  padding-top: 100px;

  background: url('../assets/Gear-Polaroid-Now-Plus-1.png')no-repeat center center/cover;
  object-fit: cover;

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
  font-weight: bold;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 77, 105));
  margin-top: 20px;

}
         

</style>
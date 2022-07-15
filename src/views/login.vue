<template>
  <div class="container">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email" /> <br />
      <input type="text" v-model="password" placeholder="password" /> <br />
      <button class="sub" type="submit">Login</button>
    </form>
    <div v-if="user">
    <p>Welcome!!</p>   <span>{{ user.username }}</span>
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
    logout() {},
  },
};
</script>
<style>
.container {
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

.btn-grad1 {
  background-image: linear-gradient(to right, #34495e 0%, #00CDAC  51%, #008080  100%);
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
@import url("https://fonts.googleapis.com/css2?family=Koulen&family=Macondo&family=Oleo+Script+Swash+Caps&display=swap");

span {
  font-size: 16px;
  font-weight: bold;
  font-family: "Koulen", cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 77, 105));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

input[type="text"],
select {
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.sub {
  font-size: 10px;
  font-weight: bold;
  font-family: "Koulen", cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 77, 105));
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to right,
    #02aab0 0%,
    #00cdac 51%,
    #02aab0 100%
  );
  padding: 15px 45px;
  margin-left: 700px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.sub:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

p{
    color: white;
    font-size: 25px;
    font-weight: bold;
}
</style>

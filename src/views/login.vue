<template>
  <div class="container">
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email" />
      <input type="text" v-model="password" placeholder="password" />
    <button type="submit" id="btn">Login</button>
    </form>
    <div v-if="user">Welcome {{ user.username }}
        <router-link to="/posts">
                <button type="submit">See Pins</button>
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
  background-image: url('./image/gear-polaroid-now-plus-1.webp');
  background-repeat: no-repeat;
  background-size: cover;
}

input[type=text], select {
  width: 50%;
  padding: 10px 20px;
  margin: 50px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input{
  width: 100%;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
}

div.container {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 80px;
}

form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#btn {
  font-size: 10px;
  font-weight: bold;
  font-family: "Koulen", cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 77, 105));
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to right,
    #02AAB0 0%,
    #00CDAC 51%,
    #02AAB0 100%
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
  margin-left: 10px;
}
.sub:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
  
</style> 
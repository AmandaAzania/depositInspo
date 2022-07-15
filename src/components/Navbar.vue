<template>
  <header>
  <nav class="navbar fixed-top">
  <div class="container-fluid">
  <div>
    <router-link class="navbar-brand" to="/"><img src="../assets/logo(trans).png" alt="Logo" width="56px" height="56px" id="icon"></router-link>
    <router-link to="/posts">Posts</router-link> | 
    <router-link to="/">Add</router-link>
  </div>
  <div>
    <form class="d-flex">
      <input class="form-control" type="search" placeholder="Search" id="search">
      <button class="btn" type="submit" id="btnSearch"><i class="bi bi-search"></i></button>
    </form>
  </div>
  <div id="settings">
      <i class="bi bi-gear" id="gear"></i>
  <div v-if="!user">
  <router-link to="/register">
    <button class="btn account"><i class="i-person-circle"></i>Sign in</button>
  </router-link>

  <router-link to="/login">
    <button class="btn account" ><i class="bi bi-person-rolodex"></i>Log in</button>
  </router-link>

  </div>
  <div v-else>{{ user.username }} 

  <router-link to="/">

  <button @click="logout">
    log out
  </button>

  </router-link>

  </div>
  </div>
  </div>
  </nav>
        
  </header>
  <Add-modal/>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.state.user
    }
  },

   methods: {
    logout(){
       return this.$store.state.user = null
    }
  },
}

</script>

<style>

a{
  text-decoration: none;
  color: #088989;
}

#search{
  border-radius: 20px;
  width: 400px;
}

.btn{
      border-radius: 0%;
      width: 50px;
      border: #D4D9DE 1px solid;
      background-color: #F8F8F8;
}

#btnSearch{
  border-radius: 100px;
  width: 50px;
  margin-left: 10px;
  transition: all 1s;
}
#btnSearch:hover{
    background-color: #CACAC9;
    width: 50px;
    border: 1px solid black;
}
nav{
  background-color: #34495E;
}

header .btn i{
    color: black;
}

header.btn hover {
  background-color: #cacac9;
}

#icon{
  width: 156px;
  height: 56px;
  border-radius: 0;
}

#gear{
  font-size: 23px;
  color: black;
  display: none;
}

#settings{
    padding: 5px 10px 5px 10px;
    display: flex;
    align-items: center;
}

#settings button{
    width: 100px;
    font-size: 15px;
    background-color: white;
    border: solid 1.5px #056E6E;
    color: #056E6E;
    transition: all 1s;
}

#settings button>i{
    color: #045050;
}

#settings button:hover{
  background-color: #0A9393;
  color: white;
  transition: all 1s;
}

#settings i{
    padding: 0 5px 0 5px;
}

#settings>i{
    padding: 0 10px 0 10px;
}
  span {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Koulen', cursive;
  font-size: 30px;
  background: -webkit-linear-gradient(#eee, rgb(1, 105, 39));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btn-grad {
            background-image: linear-gradient(to right, #348F50 0%, #56B4D3  51%, #348F50  100%);
            margin-left: 2rem;
            padding: 2px 5px;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }
          .btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
</style>
<template>
        <header>
          <nav class="navbar fixed-top">
            <div class="container">
              <div>
              <router-link class="navbar-brand" to="/"><img src="../assets/logo(trans).png" alt="CAM Logo" width="56px" height="56px" id="icon"></router-link>
              <router-link to="/posts">Posts</router-link> | 
              <router-link to="/AddPost" v-if="user" data-bs-toggle="modal" data-bs-target="#AddModal">Add</router-link>
              </div>
              <div>
              </div>
              <div id="settings">
                <div v-if="!user">
                  <router-link to="/register">
                  <button class="btn account" ><i class="bi bi-person-circle"></i>Sign in</button>
                </router-link>
                <router-link to="/login">
                <button class="btn account" ><i class="bi bi-person-rolodex"></i>Log in</button>
                </router-link>            
                </div>
                 <div v-else>
                  <button class="btn btn-grad gears" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" id="account">
                    <i class="bi bi-gear" id="gear"></i>
                    <span id="username">{{user.name}}</span>
                  </button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasRightLabel">Account Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
                      </div>
                      <div class="offcanvas-body">
                          Welcome To Your Account Details <br> {{user.name}}
                          <div>
                            <p class="ms-4 mt-3">Email Address: {{user.email}}</p>
                            <p class="ms-4">User Name: {{user.name}}</p>
                            <p class="ms-4">Password: {{user.password}}</p>
                            <p class="ms-4">Profile Picture: </p><img :src="user.icon" alt="pfp" id="profile">
                          </div>
                            <router-link to="/">
                              <button class="btn-grad mt-3" @click="logout">
                                  Log Out
                              </button>
                             </router-link>
                        </div>
                    </div>
                 </div>
              </div>

              </div>
             
          </nav>
        </header>
        <Add-modal/>
</template>

<script>
import AddModal from './AddModal.vue'
export default {
  components: { AddModal },
  computed:{
    user(){
      return this.$store.state.user
    }
  },
  methods: {
    logout() {
      return (this.$store.state.user = null);
    },
  },
};
</script>

<style scoped>
/* .container{
  justify-content: space-between;
} */

a{
  text-decoration: none;
  color: white;
}

#search {
  border-radius: 20px;
  width: 400px;
}

.btn {
  border-radius: 0%;
  width: 50px;
  border: #d4d9de 1px solid;
  background-color: #f8f8f8;
}

#btnSearch {
  border-radius: 100px;
  width: 50px;
  margin-left: 10px;
  transition: all 1s;
}

#btnSearch:hover {
  background-color: #cacac9;
  width: 50px;
  border: 1px solid black;
}

nav {
  background-color: #34495e;
  color: black;
}

header .btn i {
  color: black;
}

#icon {
  width: 156px;
  height: 56px;
  border-radius: 0;
  object-fit: cover;
}

#gear {
  font-size: 23px;
  color: black;
}

#settings {
  padding: 5px 10px 5px 10px;
  display: flex;
  align-items: center;
}

#settings button{
    font-size: 15px;
    width: 110px;
    background-color: white;
    border: solid 1.5px #056e6e;
    color: #056e6e;
    transition: all 1s;
}

#settings button > i {
  color: #045050;
}

#settings button:hover {
  background-color: #0a9393;
  color: white;
  transition: all 1s;
}

#settings i {
  padding: 0 5px 0 5px;
}

#settings > i {
  padding: 0 10px 0 10px;
}

@media (max-width:1200px){
    .navbar>.container{
      flex-wrap: nowrap;
    }

}

@media (max-width:875px){
    #search{
      width: 250px
    }
}

.btn-grad {
  background-image: linear-gradient(to right, #348F50 0%, #56B4D3  51%, #348F50  100%);
  width: 150px !important;
  padding: 2px 5px;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;            
  box-shadow: 0 0 10px #eee;
  border-radius: 10px;
  display: block;
}
.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
#account{
  display: flex;
  align-items: center;
}

.offcanvas{
  background-color: #34495e;
  color: white;
}

.offcanvas-body{
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  align-items: center;
}

.offcanvas-body>div{
  /* padding: 5px 5px 5px 5px; */
  border: #045050 3px groove;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

#profile{
  width: 350px;
  border-radius: 350px;
  border: #045050 1px solid;
}

@media (max-width: 650px){
    #username{
      display: none;
    }
    .gears{
      width: 47px !important;
    }
}

</style>

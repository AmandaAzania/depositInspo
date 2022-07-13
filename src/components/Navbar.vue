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
                <button class="btn account" ><i class="bi bi-person-circle"></i>Sign In</button>
                <button class="btn account" ><i class="bi bi-person-rolodex"></i>Log In</button>
              </div>
            </div>
          </nav>
        </header>
</template>

<script>
export default {

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
      border: #d4d9de 1px solid;
      background-color: #f8f8f8;
}

#btnSearch{
  border-radius: 100px;
  width: 50px;
  margin-left: 10px;
  transition: all 1s;
}

#btnSearch:hover{
    background-color: #cacac9;
    width: 50px;
    border: 1px solid black;
}

nav{
  background-color: #34495e;
}

header .btn i{
    color: black;
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
    border: solid 1.5px #056e6e;
    color: #056e6e;
    transition: all 1s;
}

#settings button>i{
    color: #045050;
}

#settings button:hover{
  background-color: #0a9393;
  color: white;
  transition: all 1s;
}

#settings i{
    padding: 0 5px 0 5px;
}

#settings>i{
    padding: 0 10px 0 10px;
}
</style>
<template>
  <Navbar/>
  <div id="allPosts">
              <form class="d-flex justify-content-center mb-4">
                <input class="form-control" type="search" placeholder="Search" id="search" v-model="search">
                <button class="btn" type="submit" id="btnSearch"><i class="bi bi-search"></i></button>
              </form>

  <div v-if="posts" class="grid">
    <Post v-for="post in posts" :key="post" :post='post'/>
  </div>
  <div v-else>
    Loading..
  </div>
  </div>
</template>

<script>
import Post from '@/components/PostCard.vue';
import Navbar from '../components/Navbar.vue'


export default {
    data(){
    return{
      search: ""
    }
  },
    components:{
        Navbar,
        Post
    },
    mounted(){
        this.$store.dispatch('getPosts');
    },
    computed:{
      posts(){
        return this.$store.state.posts?.filter(posts => {
          let isMatch = true;
          if (!posts.catergory.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
        })
      }
    }
}
</script>

<style>
#allPosts{
  margin-top: 5%;
  font-size: 20px;
  min-width: 100vw;
  padding: 25px;
}

@media (max-width:1200px){
    #allPosts{
      margin-top: 12%
    }
}
* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #415c77;
}

#search{
  border-radius: 20px;
  width: 400px;
}

#btnSearch{
  border-radius: 100px;
  width: 50px;
  margin-left: 10px;
  transition: all 1s;
  border: #d4d9de 1px solid;
  background-color: #f8f8f8;
}

#btnSearch:hover{
    background-color: #cacac9;
    width: 50px;
    border: 1px solid black;
}

</style>
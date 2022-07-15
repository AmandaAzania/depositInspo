<template>
  <Navbar/>
  <div id="allPosts">
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
    components:{
        Navbar,
        Post
    },
    mounted(){
        this.$store.dispatch('getPosts');
    },
    computed:{
      posts(){
        return this.$store.state.posts
      }
    }
}
</script>

<style>
#allPosts{
  margin-top: 8%;
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
</style>
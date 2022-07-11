<template>
  <Navbar/>
  <div id="allPosts">
  <div v-if="posts" class="row">
    <div v-for="post in posts" :key="post" class="col-md-4">
      <p>{{post.id}}</p>
      <img :src="post.image_url" alt="" class="postImg">
    </div>
  </div>
  <div v-else>
    Loading..
  </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'


export default {
    components:{
        Navbar
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 100vw;
}

.postImg{
  border-radius: 0;
  object-fit: fill;
}

</style>
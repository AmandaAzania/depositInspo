<template>
  <Navbar/>
  <div id="allPosts">
  <div v-if="posts" class="row">
    <div v-for="post in posts" :key="post" class="col-md-3">
      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
      <div class="cards">
        <div class="card">
          <img :src="post.image_url" alt="" class="postImg">
          <p class="card-desc">
            Posted by 
            <div>{{post.postedBy}}</div>
            <button id="postButton">View</button>
          </p>
        </div>
      </div>
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
  justify-content: center;
  min-width: 100vw;
}

.postImg{
  border-radius: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
}

* {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

body {

  background-color: #34495e;
}

.cards {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  margin: 40px;
  position: relative;
  max-width: 350px;
  max-height: 450px;
  box-shadow: 0 40px 60px -6px black;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
}

.card-desc {
  display: block;
  font-size: 1.2rem;
  position: absolute;
  height: 0;
  width: 100%;
  top: 0;
  opacity: 0;
  padding: 18px 8%;
  background-color: rgba(0, 0, 0, 0.65);
  overflow-y: scroll;
  color: white;
  transition: 0.8s ease;
  display: flex;
  flex-direction: column;
  margin: auto;
}

#postButton{
  width: 25%;
  align-self: center;
  border-radius: 200px;
  background-color: #34495e;
  font-size: 16px;
  color: white;
}

.card:hover .card-desc {
  opacity: 1;
  height: 100%;
  width: 100%;
}


</style>
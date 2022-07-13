<template>
<Navbar/>
<div id="singlePost" style="color='white'">
    {{post}}
  <div v-if="post" id="bigcard">
        <img :src="post.image_url" alt="" id="bigimg" class="img-fluid">
        <hr>
        <div id="bigDesc">

        <p>{{post.catergory}}</p>
        </div>
  </div>
  <div v-else>
    Loading...
  </div>

</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import store from '../store'
export default {
  components: { Navbar },
    props: ['id'],
    mounted(){
      store.dispatch('getPost', this.id)
    },
    computed:{
      post(){
        return store.state.post
      }
    }
}
</script>

<style>
#bigcard{
  margin-top: 10%;
  font-size: 20px;
  align-self: center;
  width: 60%;
  height: 375px;
  background-color: white;
  border-radius: 30px;
  display: flex;
   flex-flow: wrap row;
   justify-content: space-between;
}

#singlePost{
    display: flex;
flex-direction: column;
justify-content: center;
}

#bigimg{
    border-radius: 0;
    width: 50%;
    height: 375px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    object-fit: fill;
    border-right: 1px solid black;
}

#bigDesc{
    padding-right: 15px;
}

</style>
<template>
<Navbar/>
<div id="singlePost" style="color='white'">
  <div v-if="post" id="bigcard">
        <div id="cardImg">
            <img :src="post.image_url" alt="" id="bigimg" class="img-fluid">
        </div>
        <div id="bigDesc">
          <div id="settings">

          </div>
          <div id="content">
            <div id="link" v-if="post.urls !== null">
            <i class="bi bi-link-45deg"></i><a :href="post.urls.url" target="blank">{{post.urls.url_short}}</a>
            </div>
            <div id="link" v-else-if="post.urls == null">
              Link not found
            </div>
            <h3>{{post.Title}}</h3>
            <p>{{post.desc}}</p>
            <div id="posted">
              
            </div>
          </div>
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

<style scoped>
#bigcard{
  align-self: center;
  width: 75%;
  height: 475px;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  border: 1px solid black;
}

#singlePost{
    display: flex;
flex-direction: column;
justify-content: center;
  background-color: teal;
  min-height: 100vh;

}

#bigimg{
    border-radius: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    object-fit: fill;
    border-right: 1px solid black;
}

#bigDesc{
    width: 50%;
    padding: 15px;
    text-align: end;
}

#cardImg{
  width: 50%;
}

#settings{
  height: 50px;
  background: black;
  margin-bottom: 10px;
}

#link{
    text-align: start;
}

#link>i{
  font-size: 25px;
}

a{
  color: black;
}

a:hover{
  text-decoration: underline;
}

#content>h3{
  font-weight: 600;
  font-size: 35px;
  color: black;
}

</style>
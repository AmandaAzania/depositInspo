<template>
<Navbar/>
<div id="singlePost" style="color='white'">
  <div v-if="post" id="bigcard">
        <div id="cardImg">
            <img :src="post.image_url" alt="" id="bigimg" class="img-fluid">
        </div>
        <div id="bigDesc">
          <div id="settings">
              <div v-if="user">
              <router-link to="/posts">
              <button type="button" id="Dbutton" @click="deletPost(this.id)"><i class="bi bi-trash"></i></button>
              </router-link>
              <button type="button" id="Dbutton" data-bs-toggle="modal" data-bs-target="#update" ><i class="bi bi-pencil-square"></i></button>
              </div>
          </div>
          <div id="main">
            <div id="link" v-if="post.urls !== null">
            <i class="bi bi-link-45deg"></i><a :href="post.urls.url" target="blank">{{post.urls.url_short}}</a>
            </div>
            <div id="link" v-else-if="post.urls == null">
              No Link
            </div>
            <h3>{{post.Title}}</h3>
            <p>{{post.desc}}</p>
          </div>
          <div id="posted">
            <div><img src="https://i.postimg.cc/Px6ZPd8Y/avatar-icon.jpg" alt=""  id="icon"></div>
            <p>Posted by <span>{{post.postedBy}}</span></p>
          </div>
        </div>
        <Update :data="post"/>
  </div>
  <div v-else>
    Loading...
  </div>

</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import store from '../store'
import Update from '@/components/update.vue'
export default {
  components: { Navbar, Update },
    props: ['id'],
    mounted(){
      store.dispatch('getPost', this.id)
    },
    computed:{
      post(){
        return store.state.post
      },
      user(){
        return store.state.user
      }
    },
    methods:{
      deletPost(){
        return this.$store.dispatch("deletPost", this.id)
      }

    }
}
</script>

<style scoped>
#bigcard{
  align-self: center;
  width: 75%;
  height: auto;
  background-color: white;
  border-radius: 30px;
  display: flex;
  flex-flow: wrap row;
  justify-content: space-between;
  border: 1px solid black;
}

#Dbutton{
  font-size: 20px;
  width: 110px;
  background-color: white;
  border: solid 1.5px #056E6E;
  color: #056E6E;
  transition: all 1s;
  height: 50px;
}

#Dbutton:hover{
  background-color: #0A9393;
  color: white;
  transition: all 1s;
}

#singlePost{
    display: flex;
flex-direction: column;
justify-content: center;
  background-color: #008080;
  min-height: 100vh;

}

#bigimg{
    border-radius: 0;
    width: auto;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#cardImg{
  width: 50%;
}

#settings{
  height: 50px;
  background: rgb(225, 225, 225);
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

h3{
  font-weight: 600;
  font-size: 35px;
  color: black;
}

#posted{
  width: 100%;
  background-color: rgb(225, 225, 225);
  height: 60px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

 #icon{
    background-color: black;
    height: 50px;
    width: 50px;
    border-radius: 100px;
    margin-left: 20px;
    margin-right: 20px;
 }

 #posted>p{
  margin: 0;
  font-size: 17px;
  margin-right: 20px;
 }

 #posted>p>span{
  font-weight: 800;
 }

@media (max-width: 875px){
  #posted{
    justify-content: center;
  }
  #posted>div{
    display: none;
    width: 100%;
  }
   #posted>p{
  margin: 0;
  font-size: 17px;
  margin-left: 20px;
  margin-right: 10px;
 }
}

</style>
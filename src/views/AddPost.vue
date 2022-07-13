<template>
<Navbar/>
<button  data-bs-toggle="modal" data-bs-target="#exampleModal1" id="modalpop">Hello</button>


     <div class="modal fade" id="exampleModal1"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">Creat A Post</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6>Add a Image</h6>
                    <input id="image_url" >
                    
                    <h6>Catergory</h6>
                    <input id="Catergory" type="text" v-model="catergory">
                    <h6> Enter Title</h6>
                    <input id="Title" type="text" v-model="title">
                    <h6> Add Description</h6>
                    <input id="Desc " type="text" v-model="desc">
                    
                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="addPost" data-bs-dismiss="modal">Add Post</button>
                    </div>
                    </div>
                </div>
                </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: { Navbar },
  data(){
    return{
            title: "",
            catergory: "",
            desc: ""
            
    }
  },
  methods:{
    addPost(){
        return this.$store.dispatch("addPost",{
            title: this.title,
            catergory: this.catergory,
            desc: this.desc
        })
    }
  }
}
</script>

<style scoped>
#modalpop{
margin-top: 20%;
}
</style>
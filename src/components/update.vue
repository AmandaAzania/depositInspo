<template>


     <div class="modal fade" id="update"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" id="exampleModalLabel">Create A Post</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6>Add a Image</h6>
                    <input id="image_url"  type="text" v-model="data.image_url">
                    
                    <h6>Catergory</h6>
                    <input id="Catergory" type="text" v-model="data.catergory">
                    <h6> Enter Title</h6>
                    <input id="Title" type="text" v-model="data.Title">
                    <h6> Add Description</h6>
                    <input id="Desc " type="text" v-model="data.desc">
                    <h6> Add Url To Website</h6>
                    <input id="Desc " type="text" v-model="data.urls.url">
                    <h6> Add a Shortened url</h6>
                    <input id="Desc " type="text" v-model="data.urls.url_short">
                    
                    
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="update" data-bs-dismiss="modal">Add Post</button>
                    </div>
                    </div>
                </div>
                </div>
</template>

<script>
export default {
props:["data"],
 methods:{
    update(){
        this.$store.dispatch("editPost", this.data)
    }
 }
}
</script>

<style>

</style>
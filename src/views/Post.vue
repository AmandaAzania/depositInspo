<template>
  <div v-if="posts">
        {{posts.id}}
  </div>
  <div>
    Hello......
  </div>
</template>

<script>
export default {
    props: ['id'],
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

</style>
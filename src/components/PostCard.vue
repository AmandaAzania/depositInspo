<template>
        <div class="card">
          <img :src="post.image_url" alt="" class="postImg">
          <div class="card-desc">
            <p> Posted by <br>{{post.postedBy}}</p>
            <router-link :to="{name: 'post', params:{id: post.id}}">
                <button id="postButton">View</button>
            </router-link> 
          </div>
        </div>
</template>

<script>
// import store from '../store'
export default {
    props: ['post']
}
</script>

<style>
.grid {
    max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
  gap: 1rem;
  grid-auto-rows: 200px 200px;

}

.card:nth-child(2) {
  grid-row: span 2;
}

.card:nth-child(4) {
  grid-row: span 3;
}

.card:nth-child(6) {
  grid-row: span 2;
}

.card:nth-child(8) {
  grid-row: span 3;
}

.card:nth-child(10) {
  grid-row: span 2;
}

.card:nth-child(13) {
  grid-row: span 2;
}

.postImg{
  border-radius: 0;
  width: 100%;
  height: 100%;
}

/* .card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: relative;
} */

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
  color: white;
  transition: 0.8s ease;
  display: flex;
  flex-direction: column;
  margin: auto;
}

#postButton{
  width: 25%;
  align-self: center;
  margin-top: 25px;
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
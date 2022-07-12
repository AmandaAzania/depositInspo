<template>
        <div class="card">
          <img :src="post.image_url" alt="" class="postImg">
          <p class="card-desc">
            Posted by 
            <div>{{post.postedBy}}</div>
            <button id="postButton">View</button>
          </p>
        </div>
</template>

<script>
export default {
    props: ['post']
}
</script>

<style>
.grid {
    max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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
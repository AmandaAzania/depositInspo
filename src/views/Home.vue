<template>
      <div class="container">
        <img src="../assets/logo.png" alt="">
        <p>CAM is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veniam blanditiis officia repudiandae. Aliquid laudantium quia impedit dolore a similique.</p>
        <router-link to="/posts">
            <button>Explore</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
body{
    background: #056e6e;
}

.container{
  min-width: 100vw;
  margin: 0;
  margin-top: 30px;
  padding: 0;
  /* display: flex;
  flex-flow: column wrap;
  justify-content: center; */
}

img{
    width: 450px;
    height: 450px;
    border-radius: 100%;
}

p{
    margin-top: 15px;
    color: white;
    text-shadow: 1px 5px 5px black;
}

button{
    width: 150px;
    height: 35px;
    border-radius: 25px;
    border: white;
    box-shadow: 0 0 10px black;
    transition: all 1s;
}

button:hover{
    box-shadow: 5px 5px 10px black;
    transition: all 1s;
}

</style>
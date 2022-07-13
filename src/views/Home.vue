<template>
      <div class="container">
        <img src="../assets/logo1.png" alt="">
        <p id="about">Capture Any Moment (CAM) is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veniam blanditiis officia repudiandae. Aliquid laudantium quia impedit dolore a similique.</p>
        <router-link to="/posts">
            <button id="explore">Explore</button>
        </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>


.container{
  min-width: 100vw;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #068282;
  padding-top: 100px;
  /* display: flex;
  flex-flow: column wrap;
  justify-content: center; */
}

img{
    width: 400px;
    height: 400px;
    border-radius: 100%;
    object-fit: cover;
    object-position: center;
}

#about{
    margin-top: 15px;
    color: white;
    text-shadow: 1px 5px 5px black;
}

#explore{
    width: 150px;
    height: 35px;
    border-radius: 25px;
    border: white;
    box-shadow: 0 0 10px black;
    transition: all 1s;
}

#explore:hover{
    box-shadow: 5px 5px 10px black;
    transition: all 1s;
}

@media (max-width:426px){
    img{
      width: 300px;
      height: 300px;  
      margin-bottom: 15px;
    }
    .container{
        padding-top: 175px;
    }
}

</style>
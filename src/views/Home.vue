<template>
      <div class="container">
        <img src="../assets/logo1.png" alt="">
        <p id="about">Capture A Moment <strong>(CAM) </strong> is a user friendly free photo sharing  website where users are able to post comment and like images that they or other users have uploaded. 
      The websites has different categories where users are able to find  a variety of pictures that peaks ones interest. 
      There are brief descriptions but the main focus of the site is visual. 
      clicking on a image will take you to the source as well as display similar interest to the image that has been clicked.
      You can set up an account, log in and like other users posts or start your own.
      posts can be tailored to a users profile according to their search history 😊.</p>
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
    text-shadow: 1px 2px 2px black;
    width: 900px;
    /* justify-self: center; */
    
    margin-left: 20%;
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
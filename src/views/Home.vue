<template>
      <div class="container">
        <img src="../assets/logo.png" alt="">
        <p>depositInspo is a Lorem ipsum dolor, sit amet consectetur adipisicing elit. At veniam blanditiis officia repudiandae. Aliquid laudantium quia impedit dolore a similique.</p>
        <button>Explore</button>
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
}

button{
    width: 150px;
    height: 35px;
    border-radius: 25px;
    border: white;
}

button:hover{
    box-shadow: 3px 3px 5px black;
    transition: all 1s;
}

</style>
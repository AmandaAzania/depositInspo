<template>
    <form @submit.prevent="register()">

        <h1>Please fill in to register</h1>
        
        <input type="text" v-model="username" placeholder="enter username" required>

        <input type="text" v-model="email" placeholder="enter email" required>

        <input type="password" v-model="password" placeholder="enter password" required> 
        <input type="password"  placeholder="confirm password" required> 

        <button type="submit">submit</button>

    </form>
</template>


<script>

</script>


<template>
  <div class="home">
    
    <Signup/>
    <SignupNav/>
    <!-- <div class="nav">
      <h3>Vous avez déja un compte ? <router-link to="/">Connection</router-link></h3>
    </div> -->

  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'
import SignupNav from '@/components/SignupNav.vue'

export default {
  name: 'About',
  components: {
    Signup, SignupNav,
  }
}
</script>

<style>


</style>

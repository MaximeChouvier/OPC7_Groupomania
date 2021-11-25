<template>
  <div class="home">
    <Login/>
    <LoginNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import LoginNav from '@/components/LoginNav.vue'

export default {
  name: 'Home',
  components: {
    Login, LoginNav,
  }
}
</script>

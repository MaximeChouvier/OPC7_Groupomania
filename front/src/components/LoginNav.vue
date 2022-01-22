<template>
    <div class="nav">
      <h2>Pas encore de compte? <br><router-link to="/Signup">Inscription</router-link></h2>
    </div>
</template>

<script>
export default {
  name: 'LoginNav',
}
</script>

<style scoped>
h2{
  font-size: 20px;
}
.nav{
  margin-top: 150px;
  text-align: center;
}
</style>
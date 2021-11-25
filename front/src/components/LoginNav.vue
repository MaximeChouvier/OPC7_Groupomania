<template>
    <div class="nav">
      <h3>Pas encore de compte? <br><router-link to="/Signup">Inscription</router-link></h3>
    </div>
</template>

<script>
export default {
  name: 'LoginNav',
}
</script>

<style scoped>
.nav{
  margin-top: 150px;
  text-align: center;
}
</style>
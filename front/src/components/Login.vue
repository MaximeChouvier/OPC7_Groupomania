<template>
  <div>
    <div class="formWrapper">
        
        <h1>Connection</h1>

        <h2>Email</h2>
        <input type="text" class="formInput" name="Login.Email" id="Login.Email">

        <h2>Mot de passe</h2>
        <input type="text" class="formInput" name="Login.Password" id="Login.Password">

        <button type="submit" class="formButton">Ce connecter</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
}
</script>

<style scoped>
.formWrapper {
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 200px;
    height: 200px;
}
.formButton {
  background-color: #75faedad;
  border: none;
  color: white;
  margin-top: 20px;
  padding: 14px;
  font-size: 16px;
}
</style>

<template>
    <div class="editnav">
      <h1>Modifier vôtre compte</h1>

    <div class="editForm">
      <input type="text" class="formInput" name="Login.Email" v-model="email" placeholder="Changer d'Email">
      <input type="password" class="formInput" name="Login.Email" v-model="email" placeholder="Changer de mot de passe">
     
      <div class="buttonZone">
        <button class="EditAccountButton">Modifier mes identifiants</button>
        <button class="EditImage">Image de profil</button>
      </div>
    </div>
    <div class="centered">
      <router-link to="/Profile"><button class="Backtoprofile">Retour au profil</button></router-link>
    </div>



    </div>
</template>

<script>
export default {
  name: 'EditAccount',
}

</script>

<style scoped>
h1{
   font-size: 20px;
   text-align: center;
} 
.editForm{
  margin:auto;
  display: flex;
  max-width: 260px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-around;
}
.formInput{
  width: 100%;
  margin: 10px;
  height: 20px;
}

.buttonZone{
  display: flex;
}
.EditImage{
  background-color:#75faedad ;
  margin: 10px 5px 0px 5px;
}
.EditAccountButton{
  background-color:#372248 ;
  margin: 10px 5px 0px 5px;
}
.Backtoprofile{
  background-color:#171123 ;
  text-align: center;
}
button{
  color:white;
  border: none;
  padding: 14px 12px;
  font-size: 14px;
}
.centered{
margin-top: 20px;
display: flex;
align-items: center;
justify-content: center;
}
</style>
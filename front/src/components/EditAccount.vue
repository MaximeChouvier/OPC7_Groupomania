<template>
    <div class="editnav">
      <h1>Modifier vôtre compte</h1>

    <div class="editForm">
      <label for="Login.Email">Email</label>
      <input type="text" class="formInput" id="Login.Email" placeholder="Changer d'Email" v-model="email">
      
      <label for="Login.Password">Mot de passe</label>
      <input type="password" class="formInput" id="Login.Password" placeholder="Changer de mot de passe" v-model="password">
     
      <div class="buttonZone">
        <button class="EditAccountButton" @click="modifyAccInfo">Modifier mes identifiants</button>
      </div>
    </div>

    <div class="centered">
      <form action="/profile" method="post" enctype="multipart/form-data">
        <input class="EditImage" type="file" accept="image/png, image/jpeg" name="EditImage" title=" "/>
      </form>
      <router-link to="/Profile"><button class="Backtoprofile">Retour au profil</button></router-link>
    </div>



    </div>
</template>

<script>
let jwt = require("jsonwebtoken");
export default {
  name: 'EditAccount',
  data(){
    return{
      email: "",
      password: "",
    };
  },
  methods: {
    async modifyAccInfo(){
      var token = localStorage.getItem("token");
      let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")

      const imageFile = document.querySelector("input[type=file]").files[0];
      if (this.modifyAccInfo != "" || imageFile) {
        const formData = new FormData();
        formData.append("email", this.email);
        formData.append("userId", decodedToken.userId);
        formData.append("password", this.password);

        if (imageFile) {
          formData.append("image", imageFile);
        }
        fetch("http://localhost:3000/api/auth/EditAccount", {
          method: "PUT",
          body: formData,
        })
        .then((res) =>{
          if (res.status == 200){
            alert("Identifiants modifiés !")
            this.$router.push("/Profile")
          } else { 
            console.log("Erreur, Aucun changements")
          }
          console.log(res)
        })
        .catch((error) => {
          console.log(error.response.data);
        });   
      }
    },
  }

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
  position: relative;
  right: 85px;
  background-color:#75faedad ;
  margin: 10px 5px 20px 5px;
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
max-width: 100px;
flex-wrap: wrap;
margin: auto;
}
</style>
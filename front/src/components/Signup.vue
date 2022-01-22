<template>
  <div>
    <div class="formWrapper">
        <h1>Inscription</h1>


        <label for="Login.Email">Email</label>
        <input type="email" class="formInput" id="Login.Email" v-model="email">

        <label for="Login.name">Nom</label>
        <input type="text" class="formInput" id="Login.name" v-model="name">

        <label for="Login.Firstname">Prénom</label>
        <input type="text" class="formInput" id="Login.Firstname" v-model="firstname">

        <label for="Login.Password">Mot de passe</label>
        <input type="password" class="formInput" id="Login.Password" v-model="password">

        <button class="formButton" @click="sendSignupRequest">S'inscrire</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Signup',
  data() {
    return {
      email: "",
      name: "",
      firstname: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async sendSignupRequest(){
      const data = {
        email: this.email,
        name: this.name,
        firstname: this.firstname,
        password: this.password
      };
      await axios
        .post("http://localhost:3000/api/auth/signup", data)
        .then((res) => {
          console.log(res);
          this.$router.push("/");
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error.response.data);
        });
    }
  }
}









</script>

<style scoped>
label{
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
}
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

<template>
  <div>
    <div class="formWrapper">
        <h1>Inscription</h1>

        <h2>Email</h2>
        <input type="email" class="formInput" name="Login.Email" v-model="email">

        <h2>Nom</h2>
        <input type="text" class="formInput" name="Login.name" v-model="name">

        <h2>Prénom</h2>
        <input type="text" class="formInput" name="Login.Firstname" v-model="firstname">

        <h2>Mot de passe</h2>
        <input type="password" class="formInput" name="Login.Password" v-model="password">

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
          this.$router.push("/")
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

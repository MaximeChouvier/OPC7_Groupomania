<template>
  <div>
    <div class="formWrapper">
        
        <h1>Connection</h1>

        <label for="Login.Email">Email</label>
        <input type="email" class="formInput" id="Login.Email" v-model="email">
        
        <label for="Login.Password">Mot de passe</label>
        <input type="password" class="formInput" id="Login.Password" v-model="password">

        <button class="formButton" @click="sendLoginRequest">Ce connecter</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Login',
  data(){
    return{
      email: "",
      password: "",
    };
  },
  methods: {
    async sendLoginRequest() {
      const data = {
        email: this.email,
        password: this.password
      };
      await axios
      .post("http://localhost:3000/api/auth/login", data)
        .then((res) =>{
          //axios.defaults.headers.common.Authorization = `Bearer`
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("id", res.data.userId)
          this.$router.push("/feed")
        })
        
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
label{
  font-size: 20px;
  margin: 10px 0px 10px 0px;
  font-weight: bold;
}
</style>

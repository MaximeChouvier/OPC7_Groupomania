<template>
    <div class="ProfileHeader">
        <div class="ProfileHeader_top">
            <img alt="an user profile image" id="ProfileHeader_UserPicture" src="../assets/logo.png">
            <h1 id="userName" class="ProfileHeader_UserName">UserName</h1>
        </div>
        <div class="ProfileHeader_bottom">
            <router-link to="/EditAccount"><button class="ProfileHeader_EditUser">Editer son compte</button></router-link>
            <button class="ProfileHeader_RemoveUser" @click="deleteAccount">Supprimer son compte</button>
        </div>
        <h2 class="leaveButton" @click="pushToFeed">Quitter le profil</h2>
   </div>
</template>

<script>
import axios from "axios";
let jwt = require("jsonwebtoken");
export default {
  name: 'ProfileHeader',
  methods:{
      async deleteAccount(){
            var token = localStorage.getItem("token");
            let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")
            let userId = {
                "userId": decodedToken.userId
            }
            
            var confirmDelete = confirm("Voulez-vous vraiment supprimer vôtre compte ?")
            if (confirmDelete == true) {
                await axios
                .post("http://localhost:3000/api/auth/delete", userId)
                .then((res) =>{
                console.log(res)
                localStorage.clear("token", "id");
                this.$router.push("/")
                })
                .catch((error) => {
                this.error = error.response.data;
                console.log(error.response.data);
        });   
            } else {
                console.log("canceled")
            }
      },
      pushToFeed(){
          this.$router.push("/feed")
      }
  },
mounted() {
    let token = localStorage.getItem("token");
    let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")
    axios
        .post("http://localhost:3000/api/auth/getUserProfileInfo", {userId : decodedToken.userId})
        .then((res) => {
            let userName = document.getElementById("userName")
            let userImage = document.getElementById("ProfileHeader_UserPicture")
            userName.innerHTML = res.data.name + " " + res.data.firstname
            userImage.src = res.data.imgUrl;
            if (res.data.isAdmin == 1) {
                userName.style.color = "#75faedad";
            }
        })
}

}
</script>
<style scoped>
img{
    max-height: 100px;
    max-width: 100px;
    border-right: 1px solid black;
    padding-right: 8px;
}
.ProfileHeader_UserName{
    font-size: 22px;
}
.ProfileHeader_top, .ProfileHeader_bottom{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid black;
}
.ProfileHeader_top{
    max-height: 110px;
}
.ProfileHeader_bottom{
    min-height: 70px;
}
button {
    border: none;
    text-decoration: none;
    padding: 12px 15px;
    text-align: center;
    font-size: 14px;
}
.ProfileHeader_EditUser{
    background-color: #414770 ;
}
.ProfileHeader_RemoveUser{
    background-color:#372248;
}
.leaveButton{
    color: #75faedad;
    text-align: center;
    font-size: 22px;
    margin-top: 40px;
}
</style>
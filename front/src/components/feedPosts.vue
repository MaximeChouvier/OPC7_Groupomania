<template>
    <div id="postContainer">
        <div v-for="post in posts" :key="post.id" class="postWrapper">
            <div class="post-upper">
                <img class="post-userPicture" src="../assets/profilholder.jpg">
                <h1 class="post-userName">{{post.userName}}</h1>
            </div>
            <div class="post-content">
                <p>{{post.postText}}</p>
            </div>
            <i class="fas fa-trash trashButton" @click="deleteThisPost(post.id)"></i>
           
        </div>
    </div>

</template>

<script>
import axios from "axios";
let jwt = require("jsonwebtoken");
export default{
    name: "feedPosts",
    data(){
        return{
            posts: []
        }
    },
    methods: {
        deleteThisPost(postId){
            let data = {
                postId: postId
            }
            axios
                .put("http://localhost:3000/api/auth/deletePost", data)
                this.$router.go(0);
        }
    },
mounted() {
    let token = localStorage.getItem("token");
    let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")
    axios
        .get("http://localhost:3000/api/auth/getAllPosts")
        .then((res) => {
            this.posts = res.data.posts
        })
    axios
        .post("http://localhost:3000/api/auth/getUserProfileInfo", {userId : decodedToken.userId})
        .then((res) => {
            if(res.data.isAdmin == false) {
                document.querySelectorAll('.trashButton').forEach(function(el) {
                el.style.display = 'none';
                });
            } else {

            }
        })

}


}


</script>

<style scoped>
.postWrapper{
    background: linear-gradient(45deg, #372248 0%,  #414770
 100%);
    border: 1px solid rgba(23, 3, 34, 0.726);
    border-radius: 10px;
    margin: 20px 0px 20px 0px;
    min-width: 300px;
    min-height: 230px;;
    max-height: 230px;;

}
.post-upper{
    border-bottom: 1px solid rgba(22, 13, 24, 0.589);
    width: 100%;
    height: 50px;

    display:flex;
    justify-content: space-around;
}
.post-userPicture{
    height: 50px;
    width: 50px;
}
.post-userName{
    font-size: 16px;
    color: #78FFF1;
}
.post-content{
    padding: 5px;
    text-align: justify;
    display: flex;
}
.fa-trash{
    position: relative;
    top: -95px;
    left: 1px;
    z-index: 0;
}
</style>
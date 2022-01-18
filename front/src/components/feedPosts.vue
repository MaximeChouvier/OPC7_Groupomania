<template>
    <div id="postContainer">
        <div v-for="post in posts" :key="post.id" class="postWrapper">
            <div class="post-upper">
                <i v-if="post.userId === userInfo.id" class="fas fa-trash trashButton" @click="deleteThisPost(post.id)"></i>
                <i v-else-if="userInfo.isAdmin == 1" class="fas fa-trash trashButton" @click="deleteThisPost(post.id)"></i>
                <img class="post-userPicture" src="../assets/profilholder.jpg">
                <h1 class="post-userName">{{post.userName}}</h1>
            </div>
            <div class="post-content">
                <p v-if="post.postText && !post.imgUrl"> only text : {{post.postText}}</p>
                <img class="postImage" v-if="!post.postText && post.imgUrl" :src="post.imgUrl">
                <div v-if="post.postText && post.imgUrl">
                    <img class="postImage" :src="post.imgUrl">
                    <p>{{post.postText}}</p>
                </div>
            </div>
            <form class="commentForm">
                <input class="commentInput" v-model="commentInput" maxlength="100" type="text" placeholder="Commentez ce post">
                <div class="commentButton" @click="createComment(post.id)">Commenter</div>
            </form>
            <div class="commentWrapper">
                <div class="comment-upper">
                    <img class="commentImage" src="../assets/profilholder.jpg" alt="">
                    <p class="commentName">Benjamin sseur</p>
                </div>
                <p class="commentText">Lorem Lorem ipsum dolor sit ipsum dolor sit  Lorem ipsum dolor sit  Lorem ipsum dolor sit amet, consectetur</p>
            </div>
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
            posts: [],
            userInfo: {},
            commentInput: "",
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
        },
        createComment(postId){
            if(!this.commentInput){
                console.log("no comment text")
            } else {
                const data = {
                userId: this.userInfo.id,
                postId: postId,
                commentText: this.commentInput,
                }
                axios
                    .post("http://localhost:3000/api/auth/createComment", data)
            }
        }
    },
    mounted() {
        let token = localStorage.getItem("token");
        let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")
            axios
            .post("http://localhost:3000/api/auth/getUserProfileInfo", {userId : decodedToken.userId})
            .then((res) => {
                this.userInfo = res.data
            })
            axios
            .get("http://localhost:3000/api/auth/getAllPosts")
            .then((res) => {
                console.log(res)
                this.posts = res.data.posts
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
    min-height: 230px;

}
.post-upper{
    border-bottom: 1px solid rgba(22, 13, 24, 0.589);
    width: 100%;
    height: 50px;

    display:flex;
    justify-content: space-around;
    align-items: center;
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
.postImage{
    height: 200px;
    width: 360px;
}

.post-content p{
    text-align: justify;
    word-wrap: break-word;
    max-width: 100%;
}
.fa-trash{
    position: relative;
    z-index: 0;
    height: 10px;
}
.commentForm{
    display: flex;
    justify-content: space-around;
}
.commentInput{
    min-width: 270px;
    top: 20px;
}
.commentButton{
    background-color: #75faedad ;
    padding: 5px;
    border: none;
    color: black;
    border-radius: 20px;
}
.commentWrapper{
    text-align: justify;
    background-color: rgba(0, 0, 0, 0.199);
    border-top: 1px solid #171123;
    border-bottom: 1px solid #171123;
}
.commentImage{
    height: 40px;
    width: 40px;
}
.comment-upper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-bottom: 1px #171123 solid;
}
.commentText{
    text-align: justify;
}
</style>
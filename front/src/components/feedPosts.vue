<template>
    <div id="postContainer">
        <div id="editPost">
            <i class="fas fa-window-close" @click="closeForm"></i>
            <h1 class="editPost_title">Editer le post</h1>
            
            <form id="editPost_form">
                <textarea v-model="editPost_text" id="editPost_formText" cols="30" rows="5" maxlength="270" placeholder="Nouveau texte"></textarea>
                <input type="file" id="editPost_formImage" name="editPost_formImage" 
                accept="image/png, image/jpeg" title=" ">
                <button class="editPost_button" @click="editPost">
                    Editer
                </button>
            </form>
        </div>
        <div v-for="({post, comments}, i) in posts" :key="post.id" class="postWrapper">
            
            <div class="post-upper">
                <i v-if="post.userId === userInfo.id" class="fas fa-trash trashButton" @click="deleteThisPost(post.id)"></i>
                <i v-else-if="userInfo.isAdmin == 1" class="fas fa-trash trashButton" @click="deleteThisPost(post.id)"></i>
                
                <i v-if="post.userId === userInfo.id && post.postText" class="fas fa-edit" @click="editForm(post.id)"></i>
                <i v-else-if="userInfo.isAdmin == 1 && post.postText" class="fas fa-edit" @click="editForm(post.id)"></i>
                
                <img class="post-userPicture" alt="an user profile image" :src="post.userImage">
                <h1 class="post-userName">{{post.userName}}</h1>
            </div>

            <div class="post-content">
                <p v-if="post.postText && !post.imgUrl"> {{post.postText}}</p>
                <img class="postImage" v-if="!post.postText && post.imgUrl" :src="post.imgUrl">
                <div v-if="post.postText && post.imgUrl">
                    <img class="postImage" :src="post.imgUrl">
                    <p>{{post.postText}}</p>
                </div>
            </div>

            <form class="commentForm">
                <input id="commentInput" v-model="commentInput[i]" maxlength="100" type="text" placeholder="Commentez ce post">
                <div class="commentButton" @click="createComment(post.id, i)">Commenter</div>
            </form>

            <div class="commentWrapper" v-for="comment in comments" :key="comment.id" >
                <i v-if="comment.userId === userInfo.id" class="fas fa-trash trashButton" @click="deleteThisComment(comment.id)"></i>
                <i v-else-if="userInfo.isAdmin == 1" class="fas fa-trash trashButton" @click="deleteThisComment(comment.id)"></i>
 
                <div class="comment-upper">
                    <img class="commentImage" :src="comment.userImage" alt="">
                    <p class="commentName">{{comment.userName}}</p>
                </div>
                <p class="commentText">{{comment.commentText}}</p>
                <form id="editComment" action="" v-if="comment.userId === userInfo.id">
                    <input v-model="editComment_text" type="text" id="editComment" placeholder="Nouveau texte">
                    <button class="editComment_button" @click="editComment(comment.id)">Editer vôtre commentaire</button>
                </form>
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
            unfilter: [],
            userInfo: {},
            commentInput:[],

            editingId: null,
            editPost_text: "",
            editComment_text: "",

            openForm: 0,
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
        createComment(postId, i){
            let inputContent = this.commentInput[i]
            if(!inputContent){
                console.log("no comment text")
            } else {
                const data = {
                    userId: this.userInfo.id,
                    postId: postId,
                    commentText: inputContent,
                    userImage: this.userInfo.imgUrl,
                    userName: this.userInfo.name + " " + this.userInfo.firstname
                }
                axios
                    .post("http://localhost:3000/api/auth/createComment", data)
                    .then(()=>{
                        this.$router.go(0)
                    })
            }
        },
        deleteThisComment(id){
            let data = {
                id: id
            }
            axios
                .put("http://localhost:3000/api/auth/deleteComment", data)
                .then(() =>{
                    this.$router.go(0);
                })
        },
        editForm(postId){
            if (this.openForm == 0){
                document.getElementById("editPost").style.display = "block"
                document.getElementById("editPost_form").style.display = "inline"
                this.editingId = postId
                this.openForm = 1;
            }

        },
        closeForm(){
            if(this.openForm == 1){
                this.openForm = 0;
                document.getElementById("editPost").style.display = "none"
                document.getElementById("editPost_form").style.display = "none"
            
            }
        },
        editPost(e){
            e.preventDefault();
            const imageFile = document.querySelector("input[type=file]").files[0];
            if (this.newPost != "" || imageFile) {
                const formData = new FormData();
                formData.append("postText", this.editPost_text);
                formData.append("userId", this.userInfo.userId);
                formData.append("postId", this.editingId);

                if (imageFile) {
                    formData.append("image", imageFile);
                }

                fetch("http://localhost:3000/api/auth/editPost", {
                    method: "PUT",
                    body: formData,
                })
                .then(() => {
                    this.$router.go(0)

                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },
        editComment(id){
            let data = {
                id: id,
                text: this.editComment_text,
            }
            axios
            .put("http://localhost:3000/api/auth/editComment", data)
            .then(() => {
                this.$router.go(0)
            })
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
                this.unfilter = res.data.posts
                axios
                .get("http://localhost:3000/api/auth/getAllComment")
                .then((res) => {
                    let filtered = []

                    this.unfilter.forEach(post => {
                    let x = res.data.comment.filter(element => element.postId === post.id)
                    let obj = {
                        post: post,
                        comments: x ,
                    }
                    filtered.push(obj)
                })
                this.posts = filtered
                console.log(this.posts)
            })
            })


    }
}

</script>

<style scoped>
label{
    font-size: 14px;
}
.postWrapper{
    background: linear-gradient(45deg, #372248 0%,  #414770
 100%);
    border: 1px solid rgba(23, 3, 34, 0.726);
    border-radius: 10px;

    margin: 20px auto 20px auto;
    min-width: 300px;
    min-height: 230px;
    max-width: 400px;

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
.fas{
    position: relative;
    z-index: 0;
    height: 10px;
}
.commentButton, .fas:hover{
    cursor: pointer ;
}
.fa-trash{
    color: rgb(104, 23, 23);
}
.fa-edit{
    color: rgb(23, 101, 104);
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
/* Edit post pop-up */
#editPost{
    background-color: rgba(0, 0, 0, 0.322);
    
}
#editPost, #editPost_form{
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    display: none;
}
#editPost_form{
    max-width: 300px;
    margin: 10px;
}
textarea{
    height: 100px;
    border-radius: 5px;
    background-color: #171123 ;
    border: none;
    resize: none;
    margin: 10px;
}
.editPost_button{
        background-color: #372248 ;
        border: none;
        padding:10px;
        font-size: 15px;
        margin: 10px;
}
.editComment_button{
    background-color: #171123;
    border: none;
    padding: 5px;
    border-radius: 10px;
}
</style>
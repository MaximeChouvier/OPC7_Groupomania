<template>
    <div class="nav">
        <form>
            <label for="postText">Texte</label>
            <textarea v-model="postText" id="postText"
            cols="30" rows="10" maxlength="270"></textarea>

            <label for="postImage">Image</label>
            <input type="file" id="postImage" name="postImage" 
            accept="image/png, image/jpeg" title=" ">
            <button @click="newPost">
                Publier vôtre post
            </button>
        </form>
        <h2 class="cancelPost" @click="pushToFeed">Retour</h2>

    </div>
</template>

<script>
// import axios from 'axios'
let jwt = require("jsonwebtoken")
export default{
    name: "PostForm",
    data(){
        return {
            postText:"",
        }   
    },
    methods: {
        pushToFeed(){
            this.$router.push("/feed")
        },
        newPost(){
            let token = localStorage.getItem("token");
            let decodedToken = jwt.verify(token, "C(Y97Y4#R}yep5J}")
            let fullName = decodedToken.name + " " + decodedToken.firstname

            const imageFile = document.querySelector("input[type=file]").files[0];
            if (this.newPost != "" || imageFile) {
                const formData = new FormData();
                formData.append("postText", this.postText);
                formData.append("userName", fullName);
                formData.append("userId", decodedToken.userId);

                if (imageFile) {
                    formData.append("image", imageFile);
                }
                
                fetch("http://localhost:3000/api/auth/createPost", {
                    method: "POST",
                    body: formData,
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((error) => {
                    console.log(error)
                })
            }
        },

    },
}
</script>

<style scoped>  
    form{
        display: flex;
        justify-content: center;
        margin: auto;
        max-width: 250px;
        flex-wrap: wrap;  
    }
    form * {
        margin: 10px;
    }
    #postText{
        border-radius: 5px;
        background-color: #171123 ;
        border: none;
        resize: none;
       
    }
    button{
        background-color: #372248 ;
        border: none;
        padding:10px;
        font-size: 15px;
    }
    .cancelPost{
        text-align: center;
        font-size: 24px;
        color:#78FFF1 ;
    }
</style>
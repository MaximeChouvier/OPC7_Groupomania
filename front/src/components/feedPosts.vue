<template>
    <div id="postContainer">
        <div v-for="post in posts" :key="post.id" class="postWrapper">
            <div class="post-upper">
                <img class="post-userPicture" src="../assets/profilholder.jpg">
                <h1 class="post-userName">{{post.userName}}, id : {{post.id}}</h1>
            </div>
            <div class="post-content">
                <p>{{post.postText}}</p>
            </div>
            <!-- <button class="deletePost">
                 Supprimer ce post
            </button> -->
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default{
    name: "feedPosts",
    data(){
        return{
            posts: []
        }
    },
    methods: {
        injectPost(post){
            console.log(post)
        }
    },
mounted() {
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
    /* background: #000; */
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
}
</style>
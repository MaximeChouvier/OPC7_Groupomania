<template>
    <div id="postContainer">
        <div class="postWrapper">
            <div class="post-upper">
                <img class="post-userPicture" src="../assets/profilholder.jpg">
                <h1 class="post-userName">Albert Dupont</h1>
            </div>
            <div class="post-content">
                <p>La fable "Le Corbeau et le Renard", l'une des plus connues du poète, en est extraite. La morale est la suivante : "Apprenez que tout flatteur vit aux dépens de celui qui l'écoute". Sous Louis XIV, la flatterie est un art.</p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default{
    name: "feedPosts",
    methods: {
        injectPost(post){
            console.log(post)
        }
    },
mounted() {
    axios
        .get("http://localhost:3000/api/auth/getAllPosts")
        .then((res) => {
            res.data.posts.forEach(item => 
            console.log(item),
            // create_PostWrapper = document.createElement("div")
            
            
            )
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
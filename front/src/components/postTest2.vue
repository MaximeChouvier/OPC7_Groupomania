<template>
    <div class="image-postWrapper">
        <div class="post-upper">
            <img class="post-userPicture" src="../assets/logo.png">
            <h1 class="post-userName">Maxime Chouvier</h1>
        </div>
        <div class="post-content">
            <img src="../assets/fox.gif">
        </div>
        <div class="post-socialStatus">
            <i class="far fa-thumbs-up postLikes post-upLike"><span class="upvoteCount">14</span></i>
            <i class="far fa-thumbs-down postLikes post-downLike"><span class="downvoteCount">6</span></i>
        </div>
    </div>
</template>

<script>
export default{
    name: "postTest2",
}
</script>

<style scoped>
.image-postWrapper{
    background: #000;
    background: linear-gradient(45deg, #372248 0%, #414770 100%);
    border: 1px solid rgba(23, 3, 34, 0.726);
    border-radius: 10px;
    margin: 20px 0px 20px 0px;
    min-width: 300px;
    min-height: 240px;
    max-height: 240px;

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
.post-content p{
    padding: 5px;
    text-align: justify;
}
.post-content img{
    height: auto;
    width: 100%;
    margin:auto;
}
.post-socialStatus{
    border-top: 1px solid rgba(22, 13, 24, 0.589);
    width: 100%;
    height: 50px;

    display:flex;
    justify-content: space-around; 
}
.postLikes{
    color: #78FFF1;
    margin-top: 5px;
}
.downvoteCount, .upvoteCount{
    color: #78FFF1;
    margin-left: 5px;
}

</style>
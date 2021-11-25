<template>
    <div class="postWrapper">
        <div class="post-upper">
            <img class="post-userPicture" src="../assets/profilholder.jpg">
            <h1 class="post-userName">Albert Dupont</h1>
        </div>
        <div class="post-content">
            <p>La fable "Le Corbeau et le Renard", l'une des plus connues du poète, en est extraite. La morale est la suivante : "Apprenez que tout flatteur vit aux dépens de celui qui l'écoute". Sous Louis XIV, la flatterie est un art.</p>
        </div>
        <div class="post-socialStatus">
            <i class="far fa-thumbs-up postLikes post-upLike"><span class="upvoteCount">4</span></i>
            <i class="far fa-thumbs-down postLikes post-downLike"><span class="downvoteCount">2</span></i>
        </div>
    </div>
</template>

<script>
export default{
    name: "postTest",
}
</script>

<style scoped>
.postWrapper{
    background: rgb(25,60,153);
    background: linear-gradient(45deg, rgba(25,60,153,1) 0%, rgba(118,25,153,1) 100%);
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
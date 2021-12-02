<template>
    <div class="ProfilePostlist">
        <div class="centered">
            <router-link to="/Feed"><h2 class="GetBackToFeed">Quitter le profil</h2></router-link>
        </div>

        <h2 class="userPost_Title">Cet utilisateur à posté ;</h2>
        <div class="postInjection">
        
        <!-- Exemple de posts -->
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

        </div>
        
    </div>
</template>

<script>
export default {
  name: 'ProfilePostlist',
}
</script>

<style scoped>
.GetBackToFeed{
    color: #78FFF1;
    font-size: 20px;
}
.centered{
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
}
.userPost_Title{
    text-align: center;
    font-size: 20px;
}
/* Exemple de posts */
.postWrapper{
    background: #000;
    background: linear-gradient(45deg, #372248 0%,  #414770
 100%);
    border: 1px solid black;
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
</style>
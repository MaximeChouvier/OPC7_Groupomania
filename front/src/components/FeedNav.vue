<template>
    <div class="nav">
      <router-link to="/"><i class="fas fa-sign-out-alt navIcon" @click="disconnect"></i>Déconnexion</router-link>
      <router-link to="/Post"><i class="far fa-comment-alt navIcon"></i>Nouveau post</router-link>
      <router-link to="/Profile"><i class="far fa-address-card navIcon"></i>Profil</router-link>
    </div>
</template>

<script>
export default {
  name: 'FeedNav',
  methods: {
  disconnect() {
    window.localStorage.clear("token", "id");
  }
}
}

</script>

<style scoped>
html, body{
  margin: 0px;
  padding: 0px;
}
.nav{
  position: fixed;
  bottom:0px;
  left:0px;
  min-width: 100%;
  min-height: 30px;
  
  background: #000;
  background: radial-gradient(circle,  #414770 0%, #372248 100%);
  border-top: 1px solid #372248;
  
  display:flex;
  justify-content:space-around;

  z-index: 10;
}
i{
  margin: 5px 0px 5px 0px;
  font-size: 30px;
}
</style>
<template>
    <div class="nav">
      <i class="fas fa-sign-out-alt navIcon"></i>
      <i class="far fa-comment-alt navIcon"></i>
      <i class="far fa-address-card navIcon"></i>
    </div>
</template>

<script>

export default {
  name: 'FeedNav',
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
  min-width: 320px;
  min-height: 30px;
  
  background: rgb(118,25,153);
  background: radial-gradient(circle, rgba(118,25,153,1) 0%, rgba(54,25,153,1) 100%);
  border-top: 1px solid rgba(54,25,153,10);
  
  display:flex;
  justify-content:space-around;
}
i{
  margin: 5px 0px 5px 0px;
  font-size: 30px;
}
</style>
<template>
  <div id="app">
    <div id="nav">
      
      
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
  color: White;
  font-family: sans-serif,arial;
}
a, .navIcon{
  color: #78FFF1;
  text-decoration: none;
}
a, .navIcon:hover{
  color: #71b5e2;
  text-decoration: none;
}
html{
  height: 100%
}
input{
  background-color: #171123;
  border-color:#171123;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 10px;
}
body {
    background: #fff;
  background: linear-gradient(50deg, #372248 0%, #414770 100%);

    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
}

</style>

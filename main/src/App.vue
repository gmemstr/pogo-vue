<template>
  <div id="app">
    <router-link to="/"><img src="logo.png" class="logo"></router-link>
    <a href="/admin" class="admin">Admin</a>
    <router-view/>
    <footer>
      Powered by <a href="https://pogoapp.net">Pogo</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.admin {
    position: absolute;
    left:0;top:10vw;
}
.logo {
  position: absolute;
  left:0;top:0;
  max-width: 20vw;max-height:20vh;
}
footer {
  position: absolute;
  bottom:0;margin:0;left:0;
  padding-bottom: 2%;
  padding-top: 2%;
  width:100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

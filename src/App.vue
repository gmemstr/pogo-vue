<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
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
.logo {
  position: absolute;
  left:0;top:0;
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

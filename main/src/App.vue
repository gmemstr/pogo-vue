<template>
  <div id="app">
    <router-link to="/"><img src="/static/logo-large.png" class="logo"></router-link>
    <a href="/admin" class="admin">Admin</a>
    <router-view/>
    <footer>
      Powered by <a href="https://pogoapp.net">Pogo</a>
    </footer>
  </div>
</template>

<script>
import Vibrant from 'node-vibrant'

export default {
  name: 'app'
}
Vibrant.from('/static/logo-large.png').getPalette().then(function (palette) {
// import Vibrant from 'node-vibrant'
  var css = document.createElement('style')
  css.type = 'text/css'
  var vibrant = null
  var muted = null
  console.log(palette)
  try {
    vibrant = palette.Vibrant.getHex()
  } catch (e) {
    vibrant = palette.LightVibrant.getHex()
  }
  try {
    muted = palette.Muted.getHex()
  } catch (e) {
    muted = palette.DarkVibrant.getHex()
  }
  var styles = 'a {color:' + vibrant + ';} footer {background-color:' + muted + ';color:' + vibrant + ';}'
  if (css.styleSheet) css.styleSheet.cssText = styles
  else css.appendChild(document.createTextNode(styles))
  document.getElementsByTagName('head')[0].appendChild(css)
})
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

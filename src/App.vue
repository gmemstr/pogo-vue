<template>
  <div id="app">
    <router-link to="/"><img src="/assets/logo-large.png" class="logo"></router-link>
    <router-view/>
    <footer>
      Powered by <a href="https://pogoapp.net">Pogo</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.setStyling()
  },
  methods: {
    setStyling () {
      var store = window.localStorage
      var css = document.createElement('style')
      css.type = 'text/css'
      var styles = 'a {color:' + store.getItem('colourLink') + ';} footer {background-color:' + store.getItem('colourAccent') + ';}'
      if (css.styleSheet) css.styleSheet.cssText = styles
      else css.appendChild(document.createTextNode(styles))
      document.getElementsByTagName('head')[0].appendChild(css)
      store.setItem('applied', true)
    }
  }
}
</script>

<style>
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

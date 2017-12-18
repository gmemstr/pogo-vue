// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as Vibrant from 'node-vibrant'

Vue.mixin({
  created: function () {
    var colours = this.$options.colours
    var store = window.localStorage
    Vibrant.from('/assets/logo-large.png').getPalette((err, p) => {
      if (err === null) {
        colours = p
        console.log(p)
        var colourLink = colours.Vibrant.getHex()
        try {
          var colourAccent = colours.LightVibrant.getHex()
        } catch (e) {
          colourAccent = colours.DarkVibrant.getHex()
        }
        store.setItem('colourLink', colourLink)
        store.setItem('colourAccent', colourAccent)
        location.reload()
      } else {
        console.log(err)
      }
    })
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

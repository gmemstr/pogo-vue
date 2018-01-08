<template>
  <div class="app" v-if="loaded">
    <h1>{{ data.title }}</h1>
      <div v-for="episode in data['items']">
        <h3><router-link :to="'e/'+episode.id">{{ episode.title }}</router-link></h3>
        <p>{{ episode.summary }}</p>
        <audio controls="controls" preload="none">
          Your browser doesn't support the audio tag!
          <source :src="episode.url">
        </audio>
      </div>
  </div>
</template>

<script>
export default {
  name: 'EpisodeList',
  data () {
    return {
      data: {},
      loaded: false
    }
  },
  created () {
    this.getFeed()
  },
  methods: {
    getFeed () {
      getFeed(data => {
        this.data = data
        this.loaded = true
        document.title = data.title
      })
    }
  }
}

function getFeed (callback) {
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      callback(JSON.parse(xmlHttp.responseText))
    }
  }
  xmlHttp.open('GET', '/json', true)
  xmlHttp.send()
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>

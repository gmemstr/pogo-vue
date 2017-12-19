<template>
  <div class="hello" v-if="loaded">
    <h1>{{ episode.title }}</h1>
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
      episode: {},
      loaded: false
    }
  },
  created () {
    this.getEp()
  },
  methods: {
    getEp () {
      getFeed(data => {
        this.episode = data['items'][this.$route.params.id]
        console.log(this.$pal)
        this.loaded = true
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
a {
  color: #42b983;
}
</style>

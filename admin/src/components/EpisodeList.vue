<template>
  <div class="hello">
    <h1>Published Episodes</h1>
    <div>
    <table style="width:100%">
                <tr>
                    <th>Title</th>
                    <th>URL</th>
                    <th></th>
                </tr>
                <tr v-for="item in items">
                    <td>{{ item.id }}: {{ item.title }}</td><td>{{ item.url }}</td><td><router-link class="button" :to="'edit/' + item.id">Edit</router-link></td>
                </tr>
                </table>
                </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EpisodeList',
  data () {
    return {
      loading: false,
      items: null,
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.items = []
      this.loading = true

      fetch('/static/feed.json').then(response => {
        return response.text()
      }).then(blob => {
        console.log(blob)
        this.loading = false
        var t = JSON.parse(blob).items
        for (var i = t.length - 1; i >= 0; i--) {
          console.log(i)
          this.items.push({
            title: t[i].title,
            url: t[i].url,
            id: t[i].id
          })
        }
      })
    }
  }
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
  display: inline-block;
  margin: 0 10px;
}
</style>

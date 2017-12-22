<template>
  <div class="hello">
    <h3>Edit {{episode.title}}</h3>
        <form enctype="multipart/form-data" action="/admin/edit" method="post">
        <label for="title">Episode Title</label>
        <input type="text" id="title" name="title" :value="episode.title">
        <label for="description">Episode Description</label>
        <textarea name="description" id="description" cols="100" rows="20" style="resize: none;">{{ episode.description }}</textarea>
        <label for="date">Publish Date</label>
        <input type="date" id="date" name="date" :value="episode.time">
        <input name="previousfilename" id="previousfilename" :value="episode.previousfilename" type="hidden">
        <input type="submit" class="button" value="Publish"></form>
  </div>
</template>

<script>
export default {
  name: 'EpisodeEdit',
  data () {
    return {
      loading: false,
      episode: {},
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
        this.loading = false
        var t = JSON.parse(blob).items
        for (var i = t.length - 1; i >= 0; i--) {
          if (t[i].id === this.$route.params.id) {
            var time = t[i].date_published.split('T')
            var prev = time[0] + '_' + t[i].title
            this.episode = {
              title: t[i].title,
              description: t[i].summary,
              url: t[i].url,
              id: t[i].id,
              time: time[0],
              previousfilename: prev
            }
          }
        }
      })
    }
  }
}
</script>

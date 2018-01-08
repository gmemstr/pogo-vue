<template>
    <div class="app" v-if="!loading">
        <h3>Settings</h3>
        <form enctype="multipart/form-data" action="/admin/settings" method="post">
        <label for="feedname">Podcast Name</label>
        <input type="text" id="feedname" name="feedname" :value="config.Name">
        <label for="host">Podcast Host</label>
        <input type="text" id="host" name="host" :value="config.Host">
        <label for="email">Podcast Email</label>
        <input type="text" id="email" name="email" :value="config.Email">
        <label for="description">Podcast Description</label>
        <textarea id="description" name="description">{{config.Description}}</textarea>
        <img :src="'http://' + config.Image" alt="Podcast thumbnail" class="thumb">
        <label for="image">Podcast Image</label>
        <input type="file" id="image" name="image">

        <br /><br />
        <input type="submit" value="Save" class="button"></form>
    </div>
</template>
<script>
export default {
  name: 'Settings',
  data () {
    return {
      loading: true,
      config: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      fetch('/admin/settings', {
        credentials: 'same-origin'
      }).then(response => {
        return response.text()
      }).then(blob => {
        this.config = JSON.parse(blob)
        this.loading = false
      })
    }
  }
}
</script>
<style>
.thumb {
  max-width: 20vh;
  display: block;
}
</style>
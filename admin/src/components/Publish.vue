<template>
  <div class="hello">
    <h1>Publish Episode</h1>
    <div>
    <h3>Publish Episode</h3>
    <form enctype="multipart/form-data" action="/admin/publish" method="post" class="publish">
        <label for="title">Episode Title</label>
        <input type="text" id="title" name="title">
        <label for="description">Episode Description</label>
        <textarea name="description" id="description" style="resize: none;" class="epdesc"></textarea>
        <label for="file">Media File</label>
        <input type="file" id="file" name="file">
        <label for="date">Publish Date</label>
        <input type="date" id="date" name="date"><br /><br />
        <input type="submit" value="Publish" class="button">
    </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Publish',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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

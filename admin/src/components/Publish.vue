<template>
  <div class="hello">
    <h3>Publish Episode</h3>
    <div>
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
  name: 'Publish'
}
</script>

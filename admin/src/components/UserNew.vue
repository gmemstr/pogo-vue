<template>
<div class="hello">
    <h3>New User</h3>
        <form enctype="multipart/form-data" action="/admin/adduser" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
        <label for="realname">Real Name</label>
        <input type="text" id="realname" name="realname">

        <label for="password">New Password</label>
        <input type="password" id="password" name="password">
        <label for="permissions">Permission Level</label>
        <select name="permissions">
            <option value="0">Publishing only</option>
            <option value="1">Publishing and Episode Management</option>
            <option value="2">Publishing, Episode and User management</option>
        </select>
        <br /><br />
        <input type="submit" class="button" value="Save"></form>
  </div>
</template>
<script>

</script>
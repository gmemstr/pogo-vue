<template>
  <div class="hello" v-if="!loading">
    <h3>Edit User</h3>
        <form enctype="multipart/form-data" action="/admin/edituser" method="post">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" :value="user.username">
        <label for="email">Email</label>
        <input type="text" id="email" name="email" :value="user.email">
        <label for="realname">Real Name</label>
        <input type="text" id="realname" name="realname" :value="user.realname">

        <label for="newpw1">New Password</label>
        <input type="password" id="newpw1" name="newpw1">
        <label for="newpw2">Repeat New Password</label>
        <input type="password" id="newpw2" name="newpw2">
        <label for="oldpw">Old Password</label>
        <input type="password" id="oldpw" name="oldpw">
        <br/><br/>
        <select name="permissions">
            <option value="0">Publishing only</option>
            <option value="1">Publishing and Episode Management</option>
            <option value="2">Publishing, Episode and User management</option>
        </select>

        <input name="id" id="id" :value="user.id" type="hidden">
        <br /><br />
        <input type="submit" value="Save" class="button"></form>
        <a v-bind:href="'/admin/deleteuser/'+user.id+''" class="button">Delete User</a>
  </div>
</template>

<script>
export default {
  name: 'UserEdit',
  data () {
    return {
      loading: true,
      user: [],
      error: null
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
      fetch('/admin/listusers', {
        credentials: 'same-origin'
      }).then(response => {
        return response.text()
      }).then(blob => {
        this.loading = false
        var t = JSON.parse(blob)
        for (var i = t.length - 1; i >= 0; i--) {
          if (parseInt(t[i].id) === parseInt(this.$route.params.id)) {
            this.user = {
              id: t[i].id,
              username: t[i].username,
              email: t[i].email,
              realname: t[i].realname
            }
          }
        }
      })
    }
  }
}
</script>
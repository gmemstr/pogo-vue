<template>
  <div class="hello">
    <h3>Published Episodes</h3>
    <div>
    <router-link :to="'/users/new/'" tag="button">New</router-link>
    <table>
        <tr>
            <th>Username</th>
            <th>Email</th>
            <th></th>
        </tr>
        <tr v-for="item in items">
            <td>{{ item.username }}</td>
            <td>{{ item.email }}</td>
            <td>
                <router-link :to="'user/' + item.id" class="button">Edit</router-link>
            </td>
        </tr>
    </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data () {
    return {
      loading: false,
      items: {},
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

      fetch('/admin/listusers', {
        credentials: 'same-origin'
      }).then(response => {
        return response.text()
      }).then(blob => {
        console.log(blob)
        this.loading = false
        var t = JSON.parse(blob).reverse()
        for (var i = t.length - 1; i >= 0; i--) {
          this.items.push({
            id: t[i].id,
            username: t[i].username,
            email: t[i].email
          })
        }
      })
    }
  }
}
</script>
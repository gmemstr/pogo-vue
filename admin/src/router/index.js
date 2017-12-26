import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/components/Publish'
import EpisodeList from '@/components/EpisodeList'
import EpisodeEdit from '@/components/EpisodeEdit'
import UserList from '@/components/UserList'
import UserEdit from '@/components/UserEdit'
import UserNew from '@/components/UserNew'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Publish',
      component: Publish
    },
    {
      path: '/manage',
      name: 'EpisodeList',
      component: EpisodeList
    },
    {
      path: '/edit/:id',
      name: 'EpisodeEdit',
      component: EpisodeEdit
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user/:id',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/users/new',
      name: 'UserNew',
      component: UserNew
    }
  ]
})

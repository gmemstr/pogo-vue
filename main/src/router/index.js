import Vue from 'vue'
import Router from 'vue-router'
import EpisodeList from '@/components/EpisodeList'
import Episode from '@/components/Episode'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'EpisodeList',
      component: EpisodeList
    },
    {
      path: '/e/:id',
      component: Episode
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

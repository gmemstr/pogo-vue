import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/components/Publish'
import EpisodeList from '@/components/EpisodeList'

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
    }
  ]
})

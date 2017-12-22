import Vue from 'vue'
import Router from 'vue-router'
import Publish from '@/components/Publish'
import EpisodeList from '@/components/EpisodeList'
import EpisodeEdit from '@/components/EpisodeEdit'

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
    }
  ]
})

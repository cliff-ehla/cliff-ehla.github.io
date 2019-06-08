import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Publication from './views/Publication.vue'
import Archive from './views/Archive.vue'
import ArchiveDetails_1 from './views/ArchiveDetails_1.vue'
import ArchiveDetails_2 from './views/ArchiveDetails_2.vue'
import Wild from './views/Wild.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/publication',
      name: 'publication',
      component: Publication
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/archive/1',
      name: 'archive-details',
      component: ArchiveDetails_1
    },
    {
      path: '/archive/2',
      name: 'archive-details',
      component: ArchiveDetails_2
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '*',
      name: 'wild',
      component: Wild
    }
  ]
})

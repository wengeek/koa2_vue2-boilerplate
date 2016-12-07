import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/Index.vue'
import About from '../views/About.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'index',
      path: '/index',
      component: Index
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

export default router

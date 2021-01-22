import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Generic from './views/Generic.vue'
import Elements from './views/Elements.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/generic',
      name: 'generic',
      component: Generic
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    }
  ]
})

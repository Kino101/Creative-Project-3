import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Winnings from '../views/Winnings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Winnings',
    name: 'Winnings',
    component: Winnings
  },
  {
    path: '/AllPossible',
    name: 'AllPossible',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AllPossible.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

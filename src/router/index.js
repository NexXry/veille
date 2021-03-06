import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Detail from "@/components/Detail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail/:id', component: Detail, name: 'Detail' ,props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

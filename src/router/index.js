import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserPosts from '../views/UserPosts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/userPosts/:username',
    name: 'User Posts',
    component: UserPosts
  },
  
]

const router = new VueRouter({
  routes
})

export default router

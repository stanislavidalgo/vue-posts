import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UserPosts from '@/views/UserPosts'
import SinglePost from '@/views/SinglePost'

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
  {
    path: '/singlePost/:username/:id',
    name: 'Single Posts',
    component: SinglePost
  },
  
]

const router = new VueRouter({
  routes
})

export default router

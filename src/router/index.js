import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import UserPosts from '@/views/UserPosts'
import SinglePost from '@/views/SinglePost'
import Profile from '@/views/Profile'

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
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  
]

const router = new VueRouter({
  routes
})

export default router

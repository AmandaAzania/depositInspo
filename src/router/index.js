import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/posts',
    name: 'posts',
    component: ()=> import('../views/AllPosts.vue')
  },

  {
    path: '/AddPost',
    name: 'AddPost',
    component: ()=> import ('../views/AddPost.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

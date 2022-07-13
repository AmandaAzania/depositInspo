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
    path: '/posts/:id',
    name: 'post',
    component: ()=> import('../views/Post.vue'),
    props: true
  }, 
  {
    path: '/AddPost',
    name: 'AddPost',
    component: ()=> import ('../views/AddPost.vue')
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/register.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

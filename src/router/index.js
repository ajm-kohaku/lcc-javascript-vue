import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/Welcome.vue')
  },
  {
    path: '/assignment-2',
    name: 'Assignment2',
    component: () => import('../views/Assignment2.vue')
  },
  {
    path: '/assignment-3',
    name: 'Assignment3',
    component: () => import('../views/Assignment3.vue')
  },
  {
    path: '/assignment-4',
    name: 'Assignment4',
    component: () => import('../views/Assignment4.vue')
  },
  {
    path: '/assignment-5',
    name: 'Assignment5',
    component: () => import('../views/Assignment5.vue')
  },
  {
    path: '/assignment-6',
    name: 'Assignment6',
    component: () => import('../views/Assignment6.vue')
  },
  {
    path: '/assignment-7',
    name: 'Assignment7',
    component: () => import('../views/Assignment7.vue')
  },
  {
    path: '/assignment-8',
    name: 'Assignment8',
    component: () => import('../views/Assignment8.vue')
  },
  {
    path: '/assignment-9',
    name: 'Assignment9',
    component: () => import('../views/Assignment9.vue')
  },
  {
    path: '/assignment-10',
    name: 'Assignment10',
    component: () => import('../views/Assignment10.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

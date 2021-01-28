import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('./components/Welcome.vue')
    },
    {
      path: '/assignment-2',
      name: 'Assignment2',
      component: () => import('./components/Assignment2.vue')
    },
    {
      path: '/assignment-3',
      name: 'Assignment3',
      component: () => import('./components/Assignment3.vue')
    },
    {
      path: '/assignment-4',
      name: 'Assignment4',
      component: () => import('./components/Assignment4.vue')
    },
    {
      path: '/assignment-5',
      name: 'Assignment5',
      component: () => import('./components/Assignment5.vue')
    },
    {
      path: '/assignment-6',
      name: 'Assignment6',
      component: () => import('./components/Assignment6.vue')
    },
    {
      path: '/assignment-7',
      name: 'Assignment7',
      component: () => import('./components/Assignment7.vue')
    },
    {
      path: '/assignment-8',
      name: 'Assignment8',
      component: () => import('./components/Assignment8.vue')
    },
    {
      path: '/assignment-9',
      name: 'Assignment9',
      component: () => import('./components/Assignment9.vue')
    },
    {
      path: '/assignment-10',
      name: 'Assignment10',
      component: () => import('./components/Assignment10.vue')
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

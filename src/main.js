import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Bootstrap from 'bootstrap'
import Jquery from 'jquery'
import Popper from 'popper.js'

//Routes
import Home from './components/Home'
import Welcome from './components/Welcome'
import Assignment2 from './components/Assignment2'
import Assignment3 from './components/Assignment3'
import Assignment4 from './components/Assignment4'
import Assignment5 from './components/Assignment5'
import Assignment6 from './components/Assignment6'
import Assignment7 from './components/Assignment7'
import Assignment8 from './components/Assignment8'
import Assignment9 from './components/Assignment9'
import Assignment10 from './components/Assignment10'

Vue.use(VueRouter, Bootstrap, Jquery, Popper)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'Home',
      component: Home
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/assignment-2',
      name: 'Assignment2',
      component: Assignment2
    },
    {
      path: '/assignment-3',
      name: 'Assignment3',
      component: Assignment3
    },
    {
      path: '/assignment-4',
      name: 'Assignment4',
      component: Assignment4
    },
    {
      path: '/assignment-5',
      name: 'Assignment5',
      component: Assignment5
    },
    {
      path: '/assignment-6',
      name: 'Assignment6',
      component: Assignment6
    },
    {
      path: '/assignment-7',
      name: 'Assignment7',
      component: Assignment7
    },
    {
      path: '/assignment-8',
      name: 'Assignment8',
      component: Assignment8
    },
    {
      path: '/assignment-9',
      name: 'Assignment9',
      component: Assignment9
    },
    {
      path: '/assignment-10',
      name: 'Assignment10',
      component: Assignment10
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

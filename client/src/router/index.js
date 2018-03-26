import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Me from '../components/Me.vue'
import store from '../store'

Vue.use(Router)

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated) return next()
  next('/login?returnPath=me')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      beforeEnter: requireAuth()
    }
  ]
})

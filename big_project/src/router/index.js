import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: () => import( '../views/RegisterView.vue')
  },
  {
    path: '/change',
    name: 'change',
    component: () => import( '../views/ChangePasView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/HomeView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

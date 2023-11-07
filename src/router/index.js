import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import AboutPage from '../views/HomePage/AboutPage.vue'
import LogIn from '../views/LogIn/LogIn.vue'
import Register from '../views/LogIn/Register.vue'
import Form1 from '../views/Clients/Form1.vue'
const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/AboutPage',
    component: AboutPage
  },
  {
    path: '/LogIn',
    component: LogIn
  },
  {
    path: '/Register',
    component: Register
  },
  {
    path: '/Form1',
    component: Form1
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

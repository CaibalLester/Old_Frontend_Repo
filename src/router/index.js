import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import HomeAgent from '../views/AgentPage/HomeAgent.vue'
import PortfolioAgent from '../views/AgentPage/PortfolioAgent.vue'
import AboutPage from '../views/HomePage/AboutPage.vue'
import AboutAgent from '../views/AgentPage/AboutPage.vue'
import LogIn from '../views/LogIn/LogIn.vue'
import Register from '../views/LogIn/Register.vue'
import FormA from '../views/AgentPage/FormA.vue'
import FormB from '../views/AgentPage/FormB.vue'
import FormC from '../views/AgentPage/FormC.vue'
import FormD from '../views/AgentPage/FormD.vue'
import FormE from '../views/AgentPage/FormE.vue'
const routes = [
  {
    path: '/',
    name : 'Page',
    component: HomePage
  },
  {
    path: '/Agent',
    name : 'page',
    component: HomeAgent
  },
  {
    path: '/PortfolioAgent',
    component: PortfolioAgent
  },
  {
    path: '/AboutPage',
    component: AboutPage
  },
  {
    path: '/AboutAgent',
    component: AboutAgent
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
    path: '/formA',
    component: FormA
  },
  {
    path: '/formB',
    component: FormB
  },
  {
    path: '/formC',
    component: FormC
  },
  {
    path: '/formD',
    component: FormD
  },
  {
    path: '/formE',
    component: FormE
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

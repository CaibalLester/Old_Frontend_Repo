import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import HomeApplicant from '../views/ApplicantPage/HomeApplicant.vue'
import HomeAgent from '../views/AgentPage/HomeAgent.vue'
import PortfolioApplicant from '../views/ApplicantPage/PortfolioApplicant.vue'
import PortfolioAgent from '../views/AgentPage/PortfolioAgent.vue'
import AboutPage from '../views/HomePage/AboutPage.vue'
import AboutApplicant from '../views/ApplicantPage/AboutPage.vue'
import AboutAgent from '../views/AgentPage/AboutPage.vue'
import LogIn from '../views/LogIn/LogIn.vue'
import Register from '../views/LogIn/Register.vue'
import FormA from '../views/ApplicantPage/FormA.vue'
import FormB from '../views/ApplicantPage/FormB.vue'
import FormC from '../views/ApplicantPage/FormC.vue'
import FormD from '../views/ApplicantPage/FormD.vue'
import FormE from '../views/ApplicantPage/FormE.vue'
import Dashboard from '../views/Admin/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Page',
    component: HomePage
  },
  {
    path: '/Applicant',
    name: 'page',
    component: HomeApplicant,
    meta: { requiresAuth: true }

  },
  {
    path: '/Agent',
    component: HomeAgent
  },
  {
    path: '/PortfolioApplicant',
    component: PortfolioApplicant
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
    path: '/AboutApplicant',
    component: AboutApplicant
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
  {
    path: '/dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const pasok = checkUserLogin();
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!pasok) {
      next("/login")
    } else {
      next();
    }
  } else {
    next();
  }
});
function checkUserLogin() {
  const userToken = sessionStorage.getItem("jwt");
  return !!userToken;
}
export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage/HomePage.vue'
import AboutPage from '../views/HomePage/AboutPage.vue'
import ContactPage from '../views/HomePage/ContactPage.vue'
import TeamPage from '../views/HomePage/TeamPage.vue'
import LogIn from '../views/LogIn/LogIn.vue'
import Register from '../views/LogIn/Register.vue'
import ChangeRegister from '../views/LogIn/ChangeRegister.vue'


import HomeApplicant from '../views/ApplicantPage/HomeApplicant.vue'
import PortfolioApplicant from '../views/ApplicantPage/PortfolioApplicant.vue'
import AboutApplicant from '../views/ApplicantPage/AboutPage.vue'
import FormA from '../views/ApplicantPage/FormA.vue'
import FormB from '../views/ApplicantPage/FormB.vue'
import FormC from '../views/ApplicantPage/FormC.vue'
import FormD from '../views/ApplicantPage/FormD.vue'
import FormE from '../views/ApplicantPage/FormE.vue'


import HomeAgent from '../views/AgentPage/HomeAgent.vue'
import PortfolioAgent from '../views/AgentPage/PortfolioAgent.vue'
import AboutAgent from '../views/AgentPage/AboutPage.vue'


import HomeAdmin from '../views/Admin/HomeAdmin.vue'
import Dash from '../views/Admin/Dash.vue'


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
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }

  },
  {
    path: '/Admin',
    component: HomeAdmin
  },
  {
    path: '/Agent',
    component: HomeAgent,
    //meta: { requiresAuth: true, allowedRoles: ['agent'] }
  },
  {
    path: '/PortfolioApplicant',
    component: PortfolioApplicant,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/PortfolioAgent',
    component: PortfolioAgent,
    //meta: { requiresAuth: true, allowedRoles: ['agent'] }
  },
  {
    path: '/AboutPage',
    component: AboutPage
  },
  {
    path: '/ContactPage',
    component: ContactPage
  },
  {
    path: '/TeamPage',
    component: TeamPage
  },
  {
    path: '/AboutApplicant',
    component: AboutApplicant,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/AboutAgent',
    component: AboutAgent,
    //meta: { requiresAuth: true, allowedRoles: ['agent'] }
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
    path: '/ChangeRegister',
    component: ChangeRegister
  },
  {
    path: '/formA',
    component: FormA,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/formB',
    component: FormB,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/formC',
    component: FormC,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/formD',
    component: FormD,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/formE',
    component: FormE,
    //meta: { requiresAuth: true, allowedRoles: ['applicant'] }
   
  },
  {
    path: '/Dash',
    component: Dash,
    //meta: { requiresAuth: true, allowedRoles: ['admin'] }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   const pasok = checkUserLogin();
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!pasok) {
//       next("/login")
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });
// function checkUserLogin() {
//   const userToken = sessionStorage.getItem("jwt");
//   return !!userToken;
// }

router.beforeEach((to, from, next) => {
  const userToken = sessionStorage.getItem("jwt");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!userToken) {
      // User is not logged in, redirect to login page
      next("/login");
    } else {
      // User is logged in, check their role
      const userRole = getUserRole(); // You need to implement this function
      console.log("User role:", userRole);

      if (!userRole) {
        console.error("User role is null or undefined. Check how it's being set.");
      }

      const allowedRoles = to.meta.allowedRoles; // Add this meta field to your routes
      console.log("Allowed roles:", allowedRoles);

      if (allowedRoles && allowedRoles.includes(userRole)) {
        // User has the required role, proceed to the requested route
        next();
      } else {
        // User doesn't have the required role, redirect to appropriate page
        redirectToAppropriatePage(userRole, next);
      }
    }
  } else {
    // The route doesn't require authentication, proceed
    next();
  }
});



function checkUserLogin() {
  const userToken = sessionStorage.getItem("jwt");
  return !!userToken;
}

function getUserRole() {
  return sessionStorage.getItem("userRole");
}

function redirectToAppropriatePage(userRole, next) {
  // Redirect the user to the appropriate page based on their role
  switch (userRole) {
    case "applicant":
      next("/Applicant");
      break;
    case "admin":
      next("/Admin");
      break;
    case "agent":
      next("/Agent");
      break;
    default:
      // Redirect to a default page for unknown roles
      next("/login");
      break;
  }
}


export default router

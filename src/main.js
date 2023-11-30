import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import axios from 'axios'
// axios.defaults.baseURL="http://backend.test/";
axios.defaults.baseURL="http://localhost:8080/";

// import'./assets/HomePage/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import'./assets/HomePage/vendor/aos/aos.js'
// import'./assets/HomePage/vendor/glightbox/js/glightbox.min.js'Ks
// import'./assets/HomePage/vendor/swiper/swiper-bundle.min.js'
// import'./assets/HomePage/vendor/isotope-layout/isotope.pkgd.min.js'
// import'./assets/HomePage/vendor/php-email-form/validate.js'
// import'./assets/HomePage/js/main.js'

createApp(App).use(router).mount('#app')

<template>
    <ApplicantPage />
  </template>
  <script>
  import ApplicantPage from '@/components/ApplicantPage/PortfolioApplicant.vue';
  
  export default {
    name: 'page',
    components: {
      ApplicantPage
    },
    mounted() {
      this.loadScripts();
    },
    methods: {
      loadScripts() {
        const scriptUrls = [
        '/homepage/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/homepage/vendor/aos/aos.js',
        '/homepage/vendor/glightbox/js/glightbox.min.js',
        '/homepage/vendor/swiper/swiper-bundle.min.js',
        '/homepage/vendor/isotope-layout/isotope.pkgd.min.js',
        '/homepage/vendor/php-email-form/validate.js',
        // '/homepage/js/main.js',
        // 'https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous',
        // 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous',
        // 'https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous'
        ];
  
        const head = document.getElementsByTagName('head')[0];
  
        scriptUrls.forEach((scriptUrl) => {
          const script = document.createElement('script');
          script.src = scriptUrl;
          script.async = true;
          head.appendChild(script);
        });
      },
    },
  };
  
  </script>
  
  <style>
  @import url('https://fonts.googleapis.com');
  @import url('https://fonts.gstatic.com');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
  @import '@/assets/HomePage/vendor/bootstrap/css/bootstrap.min.css';
  @import '@/assets/HomePage/vendor/bootstrap-icons/bootstrap-icons.css';
  /* @import '@/assets/HomePage/vendor/aos/aos.css'; */
  @import '@/assets/HomePage/vendor/glightbox/css/glightbox.min.css';
  @import '@/assets/HomePage/vendor/swiper/swiper-bundle.min.css';
  @import '@/assets/HomePage/vendor/remixicon/remixicon.css';
  /* @import url('https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css'); */
  
  @import '@/assets/HomePage/css/main.css';
  </style>
  
  
  
  
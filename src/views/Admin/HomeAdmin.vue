<template>
    <AdminPage />
  </template>
  <script>
  import AdminPage from '@/components/AdminPage/HomeAdmin.vue';
  
  export default {
    name: 'page',
    components: {
      AdminPage
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
  @import '@/assets/HomePage/vendor/glightbox/css/glightbox.min.css';
  @import '@/assets/HomePage/vendor/swiper/swiper-bundle.min.css';
  @import '@/assets/HomePage/vendor/remixicon/remixicon.css';
  @import '@/assets/HomePage/css/main.css';
  </style>
  
  
  
  
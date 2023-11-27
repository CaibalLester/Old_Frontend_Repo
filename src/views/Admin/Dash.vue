<template>
    <HomePage />
  </template>
  <script>
  import HomePage from '@/components/AdminPage/AdDash.vue';
  
  export default {
    name: 'Page',
    components: {
      HomePage
    },
    mounted() {
      this.loadScripts();
    },
    methods: {
      loadScripts() {
        const scriptUrls = [
        '/ourdash/js/jquery.min.js',
        '/ourdash/js/bootstrap.bundle.min.js',
        '/ourdash/js/apexcharts.min.js',
        '/ourdash/js/custom.js',
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
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700&display=swap');
 
  @import '@/assets/mydash/css/bootstrap.min.css';
  @import '@/assets/mydash/css/bootstrap-icons.css';
  @import '@/assets/mydash/css/apexcharts.css';
  @import '@/assets/mydash/css/tooplate-mini-finance.css';


  </style>
  
  
  
  
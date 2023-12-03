<template>
    <body class="page-about">

       <!-- ======= Header ======= -->
       <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a  class="logo d-flex align-items-center"></a>
  
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
          <nav id="navbar" class="navbar">
            <ul>
              <li> <a  class="logo d-flex align-items-center" href="/Agent"> <h1 class="d-flex align-items-right">ALLIANZ</h1></a></li>
              <li><a href="/Agent" >Home</a></li>
              <li><a href="/AboutAgent" class="active">About</a></li>
              <li><a href="/PortfolioAgent" >Portfolio</a></li>
              <li><a href="/DashAgent" >Overview</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </nav><!-- .navbar -->
  
        </div>
      </header>
      <!-- End Header -->

<main id="main">
  <!-- ======= Breadcrumbs ======= -->
  <div class="breadcrumbs d-flex align-items-center">
    <div class="container position-relative d-flex flex-column align-items-center">

      <h2>About</h2>
      <ol>
        <li><a href="/Agent">Home</a></li>
        <li>About</li>
      </ol>

    </div>
  </div><!-- End Breadcrumbs -->

  <!-- ======= About Section ======= -->
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">

      <div class="row gy-2" data-aos="fade-up">
        <div class="col-lg-2">
          
        </div>
        <div class="col-lg-8">
          <div class="content ps-lg-5">
            <h3>Why should someone consider getting insurance and making investments with Allianz PNB?</h3>
            <p>
              Delving into the realms of insurance and investment, Allianz PNB Life Insurance Corporation presents a compelling narrative of safeguarding against the unpredictable while fostering avenues for wealth accumulation. 
            </p>
            <ul>
              <li><i class="bi bi-check-circle-fill"></i> Insurance provides financial protection in case of unexpected events, offering peace of mind.</li>
              <li><i class="bi bi-check-circle-fill"></i> Investments with Allianz PNB can help grow wealth over time through various financial instruments.</li>
              <li><i class="bi bi-check-circle-fill"></i> Allianz PNB's products cater to diverse needs, from life insurance to investment opportunities.</li>
              <li><i class="bi bi-check-circle-fill"></i> Having both insurance and investments with Allianz PNB offers a comprehensive financial strategy.</li>
              <li><i class="bi bi-check-circle-fill"></i> It's a reliable way to plan for the future, ensuring financial stability for you and your family.</li>
              <li><i class="bi bi-check-circle-fill"></i> Allianz PNB's expertise in both insurance and investment markets enhances overall financial planning.</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section><!-- End About Section -->
</main><!-- End #main -->


<a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<div id="preloader"></div>

</body>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'assets/img/about-header.jpg'
    };
  }
  // ... other component options
};
</script>
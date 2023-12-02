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
            <li> <a  class="logo d-flex align-items-center" href="/"> <h1 class="d-flex align-items-right">ALLIANZ</h1></a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/AboutPage" class="active">About</a></li>
            <li><a href="/TeamPage">Team</a></li>
            <li><a href="/ContactPage">Contact</a></li>
            <li class="dropdown"><a href="#"><span>Info</span> <i
                  class="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="/LogIn">Log In</a></li>
                <li><a href="/Register">Register</a></li>
              </ul>
            </li>
          </ul>
    </nav><!-- .navbar -->

  </div>
</header><!-- End Header -->

<main id="main">
  <!-- ======= Breadcrumbs ======= -->
  <div class="breadcrumbs d-flex align-items-center">
    <div class="container position-relative d-flex flex-column align-items-center">

      <h2>Contact</h2>
      <ol>
        <li><a href="/">Home</a></li>
        <li>Contact</li>
      </ol>

    </div>
  </div><!-- End Breadcrumbs -->

         <!-- ======= About Section ======= -->
<section id="about" class="about">
    <div class="container" data-aos="fade-up">
        <div class="row gy-2" data-aos="fade-up">

            <!-- Card 1 -->
            <div class="col-lg-4">
                <div class="content">
                    <div class="itcard">
                        <div class="itcontainer">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 2 --> <br>
            <div class="col-lg-4">
                <div class="content">
                    <div class="itcard">
                        <div class="itcontainer">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 3 --> <br>
            <div class="col-lg-4">
                <div class="content">
                    <div class="itcard">
                        <div class="itcontainer">
                            <h4><b>John Doe</b></h4>
                            <p>Architect & Engineer</p>
                        </div>
                    </div>
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
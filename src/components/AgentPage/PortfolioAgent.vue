<template>
    <body class="page-index">
  
      <!-- ======= Header ======= -->
      <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
  
          <a href="index.html" class="logo d-flex align-items-center">
            <!-- Uncomment the line below if you also wish to use an image logo -->
            <!-- <img src="assets/img/logo.png" alt=""> -->
            <h1 class="d-flex align-items-center">ALLIANZ</h1>
          </a>
  
          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
  
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/Agent">Home</a></li>
              <li><a href="/AboutAgent">About</a></li>
              <li><a href="/PortfolioAgent" class="active">Portfolio</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li class="dropdown"><a href="#"><span>Company Forms</span> <i
                    class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li class="dropdown"><a href="#"><span>Forms</span> <i
                        class="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                      <li><a href="/FormA">Form A</a></li>
                      <li><a href="/FormB">Form B</a></li>
                      <li><a href="/FormC">Form C</a></li>
                      <li><a href="/FormD">Form D</a></li>
                      <li><a href="/FormE">Form E</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="/">Logout</a></li>
            </ul>
          </nav><!-- .navbar -->
  
        </div>
      </header>
      <!-- End Header -->
  
     <!-- ======= myport Section ======= -->
<section id="myport" class="myport d-flex align-items-center">
  <div class="container">

        <div class="row">
          <!-- Left Card -->
          <div class="col-md-6">
            <div class="card">
                <h2 data-aos="fade-up">Personal Info</h2>
                <form action="">
                    <br>
                    <label for="fullname">Full Name:</label>
                    <input type="text"  name="fullname" class="form-control" placeholder="Lastname, Firstname M.I.">     
                    <label for="gender">Gender:</label>
                    <input type="text" name="gender" class="form-control" placeholder="Male or Female">
                    <label for="mobileNo">Mobile Number:</label>
                    <input type="text"  name="mobileNo" class="form-control" placeholder="Mobile Number">
                    <label for="homeAddress">Home address:</label>
                    <input type="text" name="homeAddress" class="form-control" placeholder=" No. Street Subdivision/Barangay City/Municipal/Province">
                    <br><input type="submit" value="Save" class="btn btn-dark center"><br>
                </form>
            </div>
          </div>
          <!-- Right Card -->
          <div class="col-md-6">
            <div class="card">
                <h2 data-aos="fade-up">Professional Info</h2>
                <form action="">
                    <br>
                    <label for="ProfessionalMemberships">Professional Memberships:</label>
                    <input type="text"  name="ProfessionalMemberships" class="form-control" placeholder="Professional Memberships">     
                    <label for="supervisorname: ">Supervisor's Name:</label>
                    <input type="text" name="supervisorname" class="form-control" placeholder="Supervisor's Name">
                    <label for="emergencycontact">Emergency Contact Number:</label>
                    <input type="text"  name="emergencycontact" class="form-control" placeholder="Emergency Contact Number">
                    <br><input type="submit" value="Save" class="btn btn-dark center"><br>
                </form>
            </div>
          </div>
       
    </div>
  </div>
</section><!-- End myport Section -->



  
     
  
       
  
    <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>
  
    <div id="preloader"></div>
  </body>
  </template>
  
<template>


    <body>
        <header class="mynavbar sticky-top flex-md-nowrap">
            
            
                <div class="mynavbar-mynav me-lg-2">
                    <div class="mynav-item text-nowrap d-flex align-items-center">
    
    
                        <div class="col-md-3 col-lg-3 me-0 px-3 fs-6">
                            <a class="mynavbar-brand">
                               
                                ALLIANZ AGENT
                            </a>
                        </div>
    
                        <button class="mynavbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="mynavbar-toggler-icon"></span>
                        </button>
    
                        <div class="dropdown ps-3">
                            <a class="mynav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id="mynavbarLightDropdownMenuLink">
                                <i class="bi-bell"></i>
                                <span class="position-absolute start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                                    <span class="visually-hidden">New alerts</span>
                                </span>
                            </a>
    
                            <ul class="dropdown-menu dropdown-menu-lg-end notifications-block-wrap bg-white shadow" aria-labelledby="mynavbarLightDropdownMenuLink">
                                <small>Notifications</small>
    
                                <li class="notifications-block border-bottom pb-2 mb-2">
                                    <a class="dropdown-item d-flex  align-items-center" href="#">
                                        <div class="notifications-icon-wrap bg-success">
                                            <i class="notifications-icon bi-check-circle-fill"></i>
                                        </div>
    
                                        <div>
                                            <span>Your account has been created successfuly.</span>
    
                                            <p>12 days ago</p>
                                        </div>
                                    </a>
                                </li>
    
                                <li class="notifications-block border-bottom pb-2 mb-2">
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="notifications-icon-wrap bg-info">
                                            <i class="notifications-icon bi-folder"></i>
                                        </div>
    
                                        <div>
                                            <span>Please check. We have sent a Daily report.</span>
    
                                            <p>10 days ago</p>
                                        </div>
                                    </a>
                                </li>
    
                                <li class="notifications-block">
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="notifications-icon-wrap bg-danger">
                                            <i class="notifications-icon bi-question-circle"></i>
                                        </div>
    
                                        <div>
                                            <span>Account verification failed.</span>
    
                                            <p>1 hour ago</p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
    
                        <div class="dropdown ps-1">
                            <a class="mynav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi-three-dots-vertical"></i>
                            </a>
    
                            <div class="dropdown-menu dropdown-menu-social bg-white shadow">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/search.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Google</span>
                                            </a>
                                        </div>
    
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/spotify.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Spotify</span>
                                            </a>
                                        </div>
    
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/telegram.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Telegram</span>
                                            </a>
                                        </div>
    
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/snapchat.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Snapchat</span>
                                            </a>
                                        </div>
    
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/tiktok.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Tiktok</span>
                                            </a>
                                        </div>
    
                                        <div class="col-lg-4 col-md-4 col-4">
                                            <a class="dropdown-item text-center" href="#">
                                                <img src="@/assets/mydash/images/social/youtube.png" class="profile-image img-fluid" alt="">
                                                <span class="d-block">Youtube</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
                      
                    <div class="dropdown px-3">
                        <a class="mynav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="@/assets/mydash/images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid" alt="">
                        </a>
                        <ul class="dropdown-menu bg-white shadow">
                            <li>
                                <div class="dropdown-menu-profile-thumb d-flex">
                                    <img src="@/assets/mydash/images/medium-shot-happy-man-smiling.jpg" class="profile-image img-fluid me-3" alt="">

                                    <div class="d-flex flex-column">
                                        <small>Thomas</small>
                                        <a href="#">thomas@site.com</a>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a class="dropdown-item" href="/ProfileAgent">
                                    <i class="bi-person me-2"></i>
                                    Profile
                                </a>
                            </li>

                            <li class="border-top mt-3 pt-2 mx-4">
                                <a class="dropdown-item ms-0 me-0" href="/">
                                    <i class="bi-box-arrow-left me-2"></i>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-3 d-md-block sidebar collapse">

                    
                    <div class="position-sticky py-4 px-3 sidebar-sticky">
                        <ul class="mynav flex-column h-100">
                            <div class="mynav-item">
                                <a class="mynavdivnk " aria-current="page" href="/DashAgent">
                                    <i class="bi-house-fill me-4"></i>
                                    Overview
                                </a>
                            </div>

                            <div class="mynav-item pt-2">
                                <a class="mynav-link" href="/ApplicantManage">
                                    <i class="bi-wallet me-4"></i>
                                    Applicant Information
                                </a>
                            </div>

                            <div class="mynav-item pt-2">
                                <a class="mynav-link active" href="/ProfileAgent">
                                    <i class="bi-person me-4"></i>
                                    Profile
                                </a>
                            </div>
                            <div class="mynav-item border-top mt-auto pt-5">
                                <a class="mynav-link" href="/Agent">
                                    <i class="bi-box-arrow-left me-2"></i>
                                    Go Back Home
                                </a>
                            </div>
                        </ul>
                    </div>
                </nav>
    
                    
                <main class="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div class="title-group mb-3">
                        <h1 class="h2 mb-0">Profile</h1>
                    </div>


                    
                    <div class="row my-4">
                        <div class="col-lg-7 col-12">
                            <div class="custom-block custom-block-profile">
                                <div class="row">
                                    <div class="col-lg-12 col-12 mb-3">
                                        <h6>General</h6>
                                    </div>

                                    

                                    <div class="col-lg-9 col-12">
                                        <p class="d-flex flex-wrap mb-2">
                                            <strong>Name:</strong>

                                            <span>Les Cai</span>
                                        </p>

                                        <p class="d-flex flex-wrap mb-2">
                                            <strong>Email:</strong>
                                            
                                            <a href="#">
                                                Cai@site.com
                                            </a>
                                        </p>

                                        <p class="d-flex flex-wrap mb-2">
                                            <strong>Birthday:</strong>

                                            <span>March 5, 1992</span>
                                        </p>

                                        <p class="d-flex flex-wrap">
                                            <strong>Address:</strong>

                                            <span>551 Swanston Street, Melbourne</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-block custom-block-profile">
                                <h6 class="mb-4">Card Information</h6>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>User ID:</strong>

                                    <span>012 395 8647</span>
                                </p>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Type:</strong>

                                    <span>Personal</span>
                                </p>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Created:</strong>

                                    <span>July 19, 2020</span>
                                </p>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Valid Date:</strong>

                                    <span>July 18, 2032</span>
                                </p>
                            </div>

                           

                           
                        </div>

                        <div class="col-lg-5 col-12">
                            <div class="custom-block bg-white">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">Profile</button>
                                    </li>
                                </ul>

                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                                        <h6 class="mb-4">Agent Profile</h6>

                                        <form class="custom-form profile-form" action="#" method="post" role="form">
                                            <input class="form-control" type="text" name="profile-name" id="profile-name" placeholder="Les Cai">

                                            <input class="form-control" type="email" name="profile-email" id="profile-email" placeholder="Les@gmail.com">

                                            <div class="input-group mb-1">
                                                <input type="file" class="form-control" id="inputGroupFile02">
                                            </div>

                                            <div class="d-flex">
                                                <button type="button" class="form-control me-3">
                                                    Reset
                                                </button>

                                                <button type="submit" class="form-control ms-2">
                                                    Update
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    
                </main>


                </div>
            </div>
    
        </body>
    
    
    </template>
<template>


<body>
    <header class="mynavbar sticky-top flex-md-nowrap">
        
        
            <div class="mynavbar-mynav me-lg-2">
                <div class="mynav-item text-nowrap d-flex align-items-center">


                    <div class="col-md-3 col-lg-3 me-0 px-3 fs-6">
                        <a class="mynavbar-brand">
                            
                            ALLIANZ ADMIN
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
                                <a class="dropdown-item" href="/profile">
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
                                <a class="mynavdivnk active" aria-current="page" href="/Dash">
                                    <i class="bi-house-fill me-4"></i>
                                    Overview
                                </a>
                            </div>

                            <div class="mynav-item pt-2">
                                <a class="mynav-link" href="/ManageAgent">
                                    <i class="bi-wallet me-4"></i>
                                    Agent Information
                                </a>
                            </div>

                            <div class="mynav-item pt-2">
                                <a class="mynav-link" href="/ManageApplicant">
                                    <i class="bi-wallet me-4"></i>
                                    Applicant Information
                                </a>
                            </div>

                            <div class="mynav-item pt-2">
                                <a class="mynav-link" href="/profile">
                                    <i class="bi-person me-4"></i>
                                    Profile
                                </a>
                            </div>
                            <div class="mynav-item border-top mt-auto pt-5">
                                <a class="mynav-link" href="/Admin">
                                    <i class="bi-box-arrow-left me-2"></i>
                                    Go Back Home
                                </a>
                            </div>
                        </ul>
                    </div>
                </nav>

                <main class="main-wrapper col-md-9 ms-sm-auto py-4 col-lg-9 px-md-4 border-start">
                    <div class="title-group mb-3">
                        <h1 class="h2 mb-0">Overview</h1>

                        <small class="text-muted">Hello Thomas, welcome back!</small>
                    </div>

                    <div class="row my-4">
                        <div class="col-lg-7 col-12">
                            <div class="custom-block custom-block-balance">
                                <small>Dito naman lalagay yung sa Total</small>

                                

                                <div class="custom-block-numbers d-flex align-items-center">
                                    <span>****</span>
                                   
                                </div>

                                <div class="d-flex">
                                    <div>
                                        <small>Valid Date</small>
                                        <p>12/2028</p>
                                    </div>

                                    <div class="ms-auto">
                                        <small>Card Holder</small>
                                        <p>Thomas</p>
                                    </div>
                                </div>
                            </div>

                            <div class="custom-block bg-white">
                                <h5 class="mb-4">History - Dito lalagay ang chart</h5>

                                <div id="pie-chart"></div>
                            </div>

                           

                            <div class="custom-block custom-block-exchange">
                                <h5 class="mb-4">Dito lalagay yung total na applicant and agent</h5>

                            </div>

                        </div>

                        <div class="col-lg-5 col-12">
                            <div class="custom-block custom-block-profile-front custom-block-profile text-center bg-white">
                                <div class="custom-block-profile-image-wrap mb-4">
                                    <img src="@/assets/mydash/images/medium-shot-happy-man-smiling.jpg" class="custom-block-profile-image img-fluid" alt="">

                                    <a href="/profile" class="bi-pencil-square custom-block-edit-icon"></a>
                                </div>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Name:</strong>

                                    <span>Thomas Edison</span>
                                </p>

                                <p class="d-flex flex-wrap mb-2">
                                    <strong>Email:</strong>
                                    
                                    <a href="#">
                                        thomas@site.com
                                    </a>
                                </p>

                                <p class="d-flex flex-wrap mb-0">
                                    <strong>Phone:</strong>

                                    <a href="#">
                                        (60) 12 345 6789
                                    </a>
                                </p>
                            </div>

                           

                            <div class="custom-block custom-block-transations">
                                <h5 class="mb-4"></h5>

                            </div>
                        </div>
                    </div>
   
                </main>
            </div>
        </div>
    </body>
</template>
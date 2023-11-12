<template>
    <section id="loginhero" class="loginhero d-flex align-items-center">

        
<div class="card">
  <div class="mycontainer">

    
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
              
                        <div class="img" :style="imgStyle"></div>
                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign Up</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a class="btn btn-outline-dark" href="/">Home</a>__
                                        <a class="btn btn-outline-dark" href="/LogIn">Sign In</a>
                                    </p><br>
                                </div>
                            </div>
                            <form @submit.prevent="save">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Email</label>
                                    <input type="text" class="form-control" placeholder="Username" v-model="email" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="confirm">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirm" required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="role">Role</label>
                                    <select class="form-select" v-model="role" required>
                                        <option selected value="">Applicant</option>
                                        <option value="admin">Admin</option>
                                        <option value="agent">Agent</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-dark rounded submit px-3" href="">Sign Up</button>
                                </div>
                               
                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        <label class="checkbox-wrap checkbox-dark mb-0"> Remember Me
                                        </label>
                                    </div>
                                </div>
                            </form>
                          
                        </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>

import axios from 'axios';
import { SHA256 } from 'crypto-js'; // Import the SHA256 function

export default {
    data() {
        return {
            imgStyle: {
                backgroundImage: "url(" + require('@/assets/log/images/logo.png') + ")",
                backgroundSize: "contain",
                backgroundColor: "rgba(1,58,122,255)"
            },
            email: "",
            password: "",
            confirm: "",
            role: "",
            rememberMe: false
        };
    },
    methods: {
        async save() {
            try {
                const hashedpassword = SHA256(this.password).toString(); // Hash the password
                const ins = await axios.post('save', {
                    email: this.email,
                    password: hashedpassword,
                    role: this.role,
                });
                this.email =""
                this.password ="";
                this.confirm ="";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
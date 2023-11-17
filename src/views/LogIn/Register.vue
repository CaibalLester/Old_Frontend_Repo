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
                                    <input type="password" class="form-control" placeholder="Password" v-model="password"
                                        required>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="confirm">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder="Confirm Password"
                                        v-model="confirm" required>
                                    <div v-if="passwordMismatch" class="text-danger mt-2">
                                        Passwords do not match.
                                    </div>
                                    <div v-if="password.length > 0 && password.length < 6" class="text-danger mt-2">
                                        Password must be at least 6 characters long.
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label class="label" for="role">Role</label>
                                    <select class="form-select" v-model="role" required>
                                        <option value="">Select Role</option>
                                        <option selected value="applicant">Applicant</option>
                                        <option value="admin">Admin</option>
                                        <option value="agent">Agent</option>
                                    </select>
                                </div>


                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-dark rounded submit px-3" href="">Sign
                                        Up</button>
                                </div>

                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-dark mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
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
            rememberMe: false,
            passwordMismatch: false,
        };
    },
    methods: {
        async save() {
            // Check if passwords match
            if (this.password !== this.confirm) {
                this.passwordMismatch = true;
                return; // Do not proceed with the save method if passwords don't match
            } else {
                // Reset the passwordMismatch flag if passwords match
                this.passwordMismatch = false;
            }

            // Check if password meets the minimum length requirement
            if (this.password.length < 6) {
                // Display an error message or take appropriate action
                console.log("Password must be at least 6 characters long");
                return;
            }

            try {
                const ins = await axios.post('authreg', {
                    email: this.email,
                    password: this.password,
                    role: this.role,
                });

                // Redirect to login page after successful registration
                this.$router.push('/login');

                // Clear form fields after successful registration
                this.email = "";
                this.password = "";
                this.confirm = "";
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>
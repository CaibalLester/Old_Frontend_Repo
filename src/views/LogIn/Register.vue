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
                  </p>
                  <br />
                </div>
              </div>
              <form @submit.prevent="save">
                <!-- Email validation message -->
                <div v-if="!isValidEmail(email)" class="text-danger mt-2">
                  Please enter a valid email address.
                </div>

                <!-- Other validation messages -->
                <div v-if="passwordMismatch" class="text-danger mt-2">
                  Passwords do not match.
                </div>
                <div v-if="password.length > 0 && password.length < 6" class="text-danger mt-2">
                  <small class="text-danger">
                    Password must be at least 6 characters long.
                  </small>
                </div>
                <div v-if="confirm !== '' && confirm !== password" class="text-danger mt-2">
                  <small class="text-danger">
                    Confirm password does not match the entered password.
                  </small>
                </div>

                <!-- Success message -->
                <div v-if="submitSuccess" class="text-success mt-2">
                  Information submitted successfully!
                </div>
                <!-- Error message -->
                <div v-if="submitError" class="text-danger mt-2">
                  Oops! Something went wrong. Please try again.
                </div>
                <br />

                <!-- Form fields -->
                <div class="form-group mb-3">
                  <label class="label" for="name">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    v-model="email"
                    required
                  />
                </div>
                <div class="form-group mb-3">
                  <label class="label" for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="password"
                    required
                  />
                </div>

                <div class="form-group mb-3">
                  <label class="label" for="confirm">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Confirm Password"
                    v-model="confirm"
                    required
                  />
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
                  <button type="submit" class="form-control btn btn-dark rounded submit px-3">
                    Sign Up
                  </button>
                </div>

                <div class="form-group d-md-flex">
                  <div class="w-50 text-left">
                    <label class="checkbox-wrap checkbox-dark mb-0">
                      Remember Me
                      <input type="checkbox" checked />
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
        backgroundColor: "rgba(1,58,122,255)",
      },
      email: "",
      password: "",
      confirm: "",
      role: "",
      rememberMe: false,
      passwordMismatch: false,
      submitSuccess: false,
      submitError: false,
    };
  },
  methods: {
    async save() {
      // Email validation
      if (!this.isValidEmail(this.email)) {
        console.log("Please enter a valid email address.");
        this.submitSuccess = false;
        this.submitError = false;
        return;
      }

      // Other validations
      if (this.password !== this.confirm) {
        this.passwordMismatch = true;
        this.submitSuccess = false;
        this.submitError = false;
        return;
      } else {
        this.passwordMismatch = false;
      }

      if (this.password.length < 6) {
        console.log("Password must be at least 6 characters long");
        this.submitSuccess = false;
        this.submitError = false;
        return;
      }

      try {
        const ins = await axios.post('authreg', {
          email: this.email,
          password: this.password,
          role: this.role,
        });

        this.submitSuccess = true;
        this.submitError = false;

        this.$router.push('/login');

        this.email = "";
        this.password = "";
        this.confirm = "";
      } catch (error) {
        console.log(error);
        this.submitSuccess = false;
        this.submitError = true;
      }
    },
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
  },
};
</script>

<template>
    <section id="loginhero" class="loginhero d-flex align-items-center">

        <div class="card">
            <div class="mycontainer">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-10">

                        <div class="login-wrap p-4 p-md-5">
                            <div class="d-flex">
                                <div class="w-100">
                                    <h3 class="mb-4">Sign In</h3>
                                </div>
                                <div class="w-100">
                                    <p class="social-media d-flex justify-content-end">
                                        <a class="btn btn-outline-dark" href="/">Home</a>__
                                        <a class="btn btn-outline-dark" href="/register">Sign Up</a>
                                    </p><br>
                                </div>
                            </div>
                            <form @submit.prevent="login" class="signin-form">
                                <div class="form-group mb-3">
                                    <label class="label" for="name">Email</label>
                                    <input type="text" v-model="email" class="form-control" placeholder="Email" required>
                                </div>
                                <label for="role">Role:</label>
    <select v-model="role">
      <option value="admin">Admin</option>
      <option value="applicant">Applicant</option>
      <option value="agent">Agent</option>
    </select>
                                <div class="form-group mb-3">
                                    <label class="label" for="password">Password</label>
                                    <input type="password" v-model="password" class="form-control" placeholder="Password"
                                        required>
                                </div><br>
                                <div class="form-group">
                                    <button type="submit" class="form-control btn btn-dark rounded submit px-3" href="">Sign
                                        In</button>
                                </div>

                                <div class="form-group d-md-flex">
                                    <div class="w-50 text-left">
                                        <label class="checkbox-wrap checkbox-dark mb-0">Remember Me
                                            <input type="checkbox" checked>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="w-50 text-md-right">
                                        <a href="#">Forgot Password</a>
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
<style>
@import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');
</style>
<!-- <script>
export default {
  data() {
    return {
      imgStyle: {
        backgroundImage: "url(" + require('@/assets/log/images/logo.png') + ")",
        backgroundSize: "contain",
        backgroundColor: "rgba(1,58,122,255)"
      }
    };
  }
};
</script> -->

<!-- <script>

import router from '@/router';
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            message: [],
        }
    },
    methods: {
        async login() {
            const data = await axios.post("login", {
                email: this.email,
                password: this.password
            });
            this.message = data.data.msg;
            if (data.data.msg === 'okay') {
                sessionStorage.setItem("jwt", data.data.token)
                router.push('/Applicant');
            }
        }
    }
}

</script>  -->

<script>
import router from '@/router';
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      role: '', // Add role field
      message: [],
    };
  },
  methods: {
    async login() {
      const data = await axios.post("login", {
        email: this.email,
        password: this.password,
        role: this.role, // Include the role in the request
      });

      this.message = data.data.msg;

      if (data.data.msg === 'okay') {
        sessionStorage.setItem("jwt", data.data.token);

        // Set the user role in sessionStorage
        sessionStorage.setItem("userRole", this.role);

        // Redirect based on the role
        switch (this.role) {
          case 'admin':
            router.push('/Admin');
            break;
          case 'applicant':
            router.push('/Applicant');
            break;
          case 'agent':
            router.push('/Agent');
            break;
          default:
            // Handle other roles or redirect to a default route
            router.push('/login');
            break;
        }
      }
    }
  }
}
</script>


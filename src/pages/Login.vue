<template>
  <div class="mt-[60px]">
    <div class="flex items-center gap-[90px] max-tablet:px-4">
      <div class="pt-[75px] bg-[#CBE4E8] w-[60%] max-tablet:hidden">
        <img src="@/assets/images/signupBG.png" alt="" />
      </div>
      <div class="w-[30%] max-tablet:w-full">
        <h1 class="font-[inter] text-4xl font-medium">Log in to Dainji's</h1>
        <h2 class="mt-6 mb-12">Enter your details below</h2>
        <form @submit.prevent="validate">
          <div class="input-form">
            <input type="text" v-model="email" required />
            <label for="email">Email</label>
            <div v-if="error.email">
              <p>{{ error.email }}</p>
            </div>
          </div>
          <div class="input-form">
            <input type="password" v-model="pwd" required />
            <label for="password">password</label>
            <div v-if="error.pwd">
              <p>{{ error.pwd }}</p>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <button
              type="submit"
              class="w-[40%] mt-10 bg-primary py-4 rounded-md text-white font-medium"
            >
              Log In
            </button>
            <a href="#" class="mt-8 text-primary">Forgot password?</a>
          </div>
        </form>
        <div class="mt-8 flex justify-center items-center gap-4">
          <p>New to Dainji's Store?</p>
          <router-link to="/sign-up" class="font-medium border-b border-black">
            Sign Up
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Checklogin } from "@/store/login";

import { ref } from "vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";
export default {
  data() {
    const email = ref("");
    const pwd = ref("");
    const router = useRouter();
    const checkLog = Checklogin();

    const Login = () => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email.value, pwd.value)
        .then(() => {
          router.replace("/");
          checkLog.login = true;
        })
        .catch(() => {
          email.value = "";
          pwd.value = "";
          alert("Email or Password is wrong!!!");
        });
    };
    return {
      Login,
      email,
      pwd,
      error: [],
    };
  },
  methods: {
    minlength(value, minLength) {
      return value.length > minLength ? true : false;
    },
    checkEmail(email) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    },
    validate() {
      this.error = [];
      if (!this.checkEmail(this.email)) {
        this.error["email"] = "Entered an invalid email address!";
      }
      if (!this.minlength(this.pwd, 5)) {
        this.error["pwd"] = "password must be at least 6 characters";
      }
      if (Object.keys(this.error).length == 0) {
        this.Login();
      }
    },
  },
};
</script>

<style scoped>
input {
  border: none;
  outline: none;
}
.input-form {
  height: 40px;
  margin-top: 40px;
  position: relative;
  border-bottom: 0.5px solid #000;
}
.input-form label {
  pointer-events: none;
  position: absolute;
  transition: 0.5s;
  top: 0;
  color: black;
  opacity: 0.3;
}

.input-form input:focus ~ label,
.input-form input:valid ~ label {
  top: -17px;
}

.input-form input {
  position: absolute;
  background-color: transparent;
  width: 100%;
  padding: 5px 0;
}
.input-form > div {
  position: absolute;
  color: red;
  margin-top: 40px;
}
</style>

<template>
  <div class="mt-20 max-w-[1170px] mx-auto">
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>404 Error</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div
      class="w-full flex flex-col justify-center items-center mt-[140px] gap-20"
    >
      <div class="flex flex-col justify-center items-center gap-10">
        <h1 class="text-[110px] font-[arial] font-medium">404 Not Found</h1>
        <p class="font-medium">
          Your visited page not found. You may go to home page.
        </p>
      </div>
      <div>
        <router-link to="/">
          <button class="text-white bg-primary py-5 px-10 rounded-md">
            Back to home page
          </button>
        </router-link>
      </div>
    </div>
  </div>
  <button @click="updateUserProfile">update</button>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/auth";
export default {
  name: "notfound",

  methods: {
    updateUserProfile() {
      // [START auth_update_user_profile]
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: "Jane Q. User",
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
        .then(() => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

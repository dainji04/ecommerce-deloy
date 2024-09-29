import { ref } from "vue";
import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/auth";

import { onBeforeMount } from "vue";

export const Checklogin = defineStore("user", () => {
  const login = ref(false);
  const userCheck = () => {
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          login.value = false;
        } else {
          console.log("sign in");
          login.value = true;
        }
      });
    });
  };
  return {
    login,
    userCheck,
  };
});

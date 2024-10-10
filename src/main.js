import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import antd from "ant-design-vue";
import firebase from "firebase/compat/app";
import { createPinia } from "pinia";

import "firebase/compat/auth";
import "firebase/compat/firestore";

import "./assets/css/tailwind.css";
import "./assets/css/base.css";

const firebaseConfig = {
  apiKey: "AIzaSyAU0iWfqpOP0GtgenEt3gwZLaNspjwAkOI",
  authDomain: "ecommerce-vuejs-524c3.firebaseapp.com",
  projectId: "ecommerce-vuejs-524c3",
  storageBucket: "ecommerce-vuejs-524c3.appspot.com",
  messagingSenderId: "788874405762",
  appId: "1:788874405762:web:8cb5ce8b9b2891cd41519b",
};

firebase.initializeApp(firebaseConfig);

const app = createApp(App);
app.use(antd);
app.use(createPinia());
app.use(router);
app.mount("#app");

<template>
  <div class="overflow-x-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import { Checklogin } from "./store/login";

const checkLog = Checklogin();
checkLog.userCheck();
</script>

<template>
  <div class="overflow-x-hidden">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

import { Checklogin } from "./store/login";

export default {
  components: {
    Header,
    Footer,
  },
  data() {
    const checkLog = Checklogin();
    checkLog.userCheck();
    return {};
  },
};
</script>

<template lang="">
  <div class="container-contact max-w-[1170px] mx-auto">
    <div id="road-map" class="flex items-center gap-3 my-20">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Contact</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="mt-20 flex gap-8">
      <div class="flex flex-col gap-8 px-9 pt-10 pb-12">
        <div>
          <div class="flex items-center gap-4">
            <img src="@/assets/fonts/calling.svg" />
            <h2 class="text-base font-medium">Call to us</h2>
          </div>
          <div>
            <p class="pt-6 text-sm font-normal">
              We are available 24/7, 7 days a week
            </p>
          </div>
          <div>
            <p class="pt-4 text-sm font-normal">Phone: +84907165254</p>
          </div>
        </div>
        <span
          class="w-full flex h-[0.5px] justify-center items-center flex-shrink-0 bg-black opacity-30"
        ></span>
        <div>
          <div class="flex items-center gap-4">
            <img src="@/assets/fonts/email.svg" />
            <h2 class="text-base font-medium">Write to us</h2>
          </div>
          <div>
            <p class="pt-6 text-sm font-normal">
              Fill out our form and we will contact you within 24 hours.
            </p>
          </div>
          <div>
            <p class="pt-4 text-sm font-normal">
              Emails: ndai31072004@gmail.com
            </p>
          </div>
        </div>
      </div>
      <form @submit.prevent="sendMessage" class="w-full px-8 py-10">
        <div class="flex flex-col gap-8">
          <div class="text-black w-full flex justify-between gap-5">
            <input
              class="w-[33.3333%] bg-gray-100 py-3 pl-4"
              placeholder="Your Name*"
              v-model="name"
            />
            <input
              class="w-[33.3333%] bg-gray-100 py-3 pl-4"
              placeholder="Your Email*"
              v-model="email"
            />
            <input
              class="w-[33.3333%] bg-gray-100 py-3 pl-4"
              placeholder="Your Phone*"
              v-model="phone"
            />
          </div>
          <div>
            <input
              class="w-full bg-gray-100 pt-3 pr-[608px] pb-[170px] pl-4"
              placeholder="Your message"
              v-model="message"
            />
          </div>
        </div>
        <button
          class="bg-primary text-white font-semibold text-base py-4 px-12 rounded-md float-right mt-8"
          type="submit"
        >
          Send Massage
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    sendMessage() {
      console.log("your name: ", this.name);
      console.log("your email: ", this.email);
      console.log("your phone: ", this.phone);
      console.log("your message: ", this.message);
      this.name = "";
      this.email = "";
      this.phone = "";
      this.message = "";
    },
  },
};
</script>
<style lang=""></style>

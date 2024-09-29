<template>
  <div class="max-w-[1170px] mx-auto">
    <div id="road-map" class="flex items-center gap-3 my-20">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <router-link to="/cart">Cart</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Checkout</a-breadcrumb-item>
      </a-breadcrumb>
    </div>

    <div>
      <h3 class="font-medium text-4xl">Billing Details</h3>
      <form @submit.prevent="submit">
        <div class="mt-12 flex justify-between">
          <div class="flex flex-col gap-8 w-[470px]">
            <div class="flex flex-col gap-2">
              <label
                for="FirstName"
                class="text-black pl-1 opacity-80 text-base font-normal"
                required
              >
                First Name
              </label>
              <input
                class="bg-[#F5F5F5] py-[13px] pl-2"
                type="text"
                v-model="formInput.name"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                for="FirstName"
                class="text-black pl-1 opacity-80 text-base font-normal"
                required
              >
                Street Address
              </label>
              <input
                class="bg-[#F5F5F5] py-[13px] pl-2"
                type="text"
                v-model="formInput.address"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                for="FirstName"
                class="text-black pl-1 opacity-80 text-base font-normal"
              >
                Apartment, floor, etc(optional)
              </label>
              <input
                class="bg-[#F5F5F5] py-[13px] pl-2"
                type="text"
                v-model="formInput.optional"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                for="FirstName"
                class="text-black pl-1 opacity-80 text-base font-normal"
                required
              >
                Phone Number <label class="text-red-700">*</label>
              </label>
              <input
                class="bg-[#F5F5F5] py-[13px] pl-2"
                type="tel"
                pattern="[0-9]{10}"
                max-length="10"
                v-model="formInput.phoneNumber"
              />
            </div>
            <div class="flex flex-col gap-2">
              <label
                for="FirstName"
                class="text-black pl-1 opacity-80 text-base font-normal"
                required
              >
                Email Address
              </label>
              <input
                class="bg-[#F5F5F5] py-[13px] pl-2"
                type="email"
                v-model="formInput.email"
              />
            </div>
          </div>
          <div class="flex flex-col gap-8 mt-8">
            <div
              v-for="item in products"
              :key="item.id"
              class="flex items-center w-full"
            >
              <div class="h-[54px] flex flex-1 items-center gap-6">
                <img
                  class="h-full w-[50px] py-[6px] px-[3px]"
                  :src="item.img"
                  alt=""
                />
                <p>{{ item.product }}</p>
              </div>
              <div>
                {{ item.price }}
              </div>
            </div>
            <div>
              <div class="w-[422px]">
                <div class="flex justify-between border-b-2 border-[#ccc] pb-4">
                  <p class="font-normal">Subtotal:</p>
                  <p>${{ subTotal }}</p>
                </div>
                <div class="flex justify-between border-b-2 border-[#ccc] py-4">
                  <p>Shipping:</p>
                  <div>
                    <p v-if="subTotal > 500">Free</p>
                    <p v-else>$30</p>
                  </div>
                </div>
                <div class="flex justify-between py-4">
                  <p>Total:</p>
                  <div>
                    <p v-if="subTotal > 500">${{ subTotal }}</p>
                    <p v-else>${{ subTotal + 30 }}</p>
                  </div>
                </div>
              </div>
              <div class="mt-4 h-7 flex items-center justify-between">
                <div class="h-full flex items-center gap-2">
                  <input
                    class="h-full"
                    id="bank"
                    value="bank"
                    type="radio"
                    v-model="formInput.pay"
                  />
                  <label for="cash"> Bank </label>
                </div>
                <div class="h-full flex items-center gap-2">
                  <img src="@/assets/images/bank/bkash.png" alt="" />
                  <img src="@/assets/images/bank/visa.png" alt="" />
                  <img src="@/assets/images/bank/masterCard.png" alt="" />
                </div>
              </div>
              <div class="mt-4 h-7 flex items-center justify-between">
                <div class="h-full flex items-center gap-2">
                  <input
                    class="h-full"
                    id="cash"
                    value="cash"
                    type="radio"
                    v-model="formInput.pay"
                  />
                  <label for="cash"> Cash on delivery </label>
                </div>
              </div>
              <div class="flex gap-4 mt-8">
                <input
                  class="border border-solid border-[#000] h-fit rounded-md py-3 px-6"
                  type="text"
                  placeholder="Coupon Code"
                  v-model="formInput.coupon"
                />
                <button
                  class="bg-primary text-white h-fit py-3 px-6 rounded-md font-medium"
                >
                  Apply Coupon
                </button>
              </div>
              <button
                class="mt-4 bg-primary text-white font-medium py-4 px-12 rounded-md"
                type="submit"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    const formInput = {
      name: "",
      address: "",
      optional: "",
      phoneNumber: "",
      Email: "",
      pay: "",
      coupon: "",
    };
    return {
      formInput,
      products: [],
      subTotal: ref(null),
    };
  },
  mounted() {
    const url = "http://localhost:3000/user-products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        this.products.forEach((product, index) => {
          product.key = index + 1;
          product.subtotal = product.price * product.quantity;
          this.subTotal += product.subtotal;
          product.subtotal = "$" + product.subtotal;
          product.price = "$" + product.price;
        });
      })
      .catch((err) => console.log("err: ", err));
  },
  methods: {
    submit() {
      console.log(this.formInput);
      this.formInput = {
        name: "",
        address: "",
        optional: "",
        phoneNumber: "",
        Email: "",
        pay: "",
        coupon: "",
      };
    },
  },
};
</script>
<style lang=""></style>

<template>
  <div>
    <div
      class="text-sm gap-[200px] h-12 w-full bg-black text-white py-3 pr-[136px] pl-[270px]"
    >
      <div class="max-w-[1170px] flex items-center justify-between">
        <div class="flex gap-2">
          <h2>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h2>
          <router-link class="underline" to="#">ShopNow</router-link>
        </div>
        <div>
          <select
            class="selectLanguage bg-black cursor-pointer focus-visible:outline-0"
          >
            <option>Vietnamese</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between gap-40 mx-auto mt-10 mb-4 max-w-[1170px]"
    >
      <div class="flex items-center gap-[188px]">
        <router-link to="/" class="font-bold select-none">
          its'Dainji
        </router-link>
        <nav class="flex gap-12">
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            Home
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/contact">
            Contact
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            About
          </router-link>
          <router-link
            class="hover:underline decoration-[#ccc]"
            to="/login"
            v-show="!checkLog.login"
          >
            Login
          </router-link>
        </nav>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative flex items-center">
          <input
            class="bg-[#f5f5f5] rounded-lg border-none outline-none py-3 px-4 pr-16"
            type="text"
            placeholder="What are you looking for?"
          />
          <img
            class="absolute right-0 mr-3 select-none"
            src="@/assets/fonts/search.svg"
            alt=""
          />
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/wish-list">
            <img class="cursor-pointer" src="@/assets/fonts/heart.svg" alt="" />
          </router-link>
          <router-link to="/cart">
            <img class="cursor-pointer" src="@/assets/fonts/cart.svg" alt="" />
          </router-link>
          <div class="flex flex-col relative" v-show="checkLog.login">
            <button @click="toggleSetting">
              <img src="@/assets/fonts/profile.svg" alt="" />
              <ul
                :class="showSetting"
                class="menu-setting w-[230px] absolute right-0 z-10"
              >
                <li>
                  <div>
                    <img src="@/assets/fonts/profile2.svg" alt="" />
                  </div>
                  <p>
                    <router-link to="/user/profile">
                      Manage My Account
                    </router-link>
                  </p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/grocery.svg" alt="" />
                  </div>
                  <p>My Order</p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/close-recycle.svg" alt="" />
                  </div>
                  <p>My Cancellations</p>
                </li>
                <li>
                  <div>
                    <img src="@/assets/fonts/star-solid.svg" alt="" />
                  </div>
                  <p>My Reviews</p>
                </li>
                <li class="cursor-pointer" @click="Logout">
                  <div>
                    <img src="@/assets/fonts/logout.svg" alt="" />
                  </div>
                  <p>Logout</p>
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span
    class="w-full flex h-[0.5px] justify-center items-center flex-shrink-0 bg-black opacity-30"
  ></span>
</template>
<script>
import firebase from "firebase/compat/app";
import { Checklogin } from "../store/login";

export default {
  setup() {
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
      checkLog.login = false;
      console.log(checkLog.login);
    };
    const checkLog = Checklogin();
    return {
      Logout,
      checkLog,
    };
  },
  data() {
    return {
      showSetting: "hidden",
    };
  },
  methods: {
    toggleSetting() {
      if (this.showSetting == "show") {
        this.showSetting = "hidden";
      } else {
        this.showSetting = "show";
      }
    },
  },
};
</script>
<style scoped>
nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #ccc;
}
.hidden {
  display: none;
}
.show {
  display: flex;
  flex-direction: column;
  gap: 13px;
}
.menu-setting {
  border-radius: 4px;
  backdrop-filter: blur(75px);
  background-color: rgba(0, 0, 0, 0.04);
  padding: 18px 12px 10px 20px;
}
.menu-setting > li {
  display: flex;
  align-items: center;
  gap: 16px;
}
.menu-setting > li > div > img {
  filter: invert(1);
}
.menu-setting > li:hover > p {
  color: blue;
}
.menu-setting > li > p {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  /*color: #fafafa; */
  color: black;
}
.menu-setting > li > div {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

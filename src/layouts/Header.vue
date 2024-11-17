<template>
  <div id="container">
    <div
      class="text-sm h-12 w-full bg-black text-white py-3 pr-[136px] pl-[270px] tablet:max-pc:px-14 max-tablet:px-0"
    >
      <div
        class="max-w-[1170px] h-full flex items-center justify-between max-tablet:items-center"
      >
        <div class="flex gap-2 w-[70%]">
          <h2>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h2>
          <router-link class="underline max-tablet:hidden" to="#">
            ShopNow
          </router-link>
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-between gap-40 mx-auto mt-7 mb-7 max-w-[1170px] max-tablet:gap-0 max-tablet:mx-4"
    >
      <div class="menu pc:hidden">
        <div>
          <button @click="toggleMenu()">
            <img src="@/assets/fonts/menu.svg" alt="" />
          </button>
          <div
            :class="isHidden"
            class="fixed top-0 left-0 right-0 bottom-0 p-6 bg-white w-[320px] max-w-[100%] z-20 rounded-tr-3xl rounded-br-3xl shadow-2xl display"
          >
            <div class="mb-4">
              <button>
                <img
                  class="w-6 h-6 invert rotate-180"
                  src="@/assets/fonts/arrow-right.svg"
                  alt=""
                  @click="toggleMenu()"
                />
              </button>
            </div>
            <ul class="grid gap-3">
              <li>
                <router-link to="cart" class="flex gap-3 items-center">
                  <img src="@/assets/fonts/cart.svg" alt="" />
                  <span class="nav-btn__title">Cart</span>
                </router-link>
              </li>
              <li>
                <router-link to="/wish-list" class="flex items-center gap-3">
                  <img src="@/assets/fonts/heart.svg" alt="" />
                  <span class="nav-btn__title">Favorite</span>
                </router-link>
              </li>
              <li>
                <router-link class="hover:underline decoration-[#ccc]" to="/">
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:underline decoration-[#ccc]"
                  to="/contact"
                >
                  Contact
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:underline decoration-[#ccc]"
                  to="/about"
                >
                  About
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:underline decoration-[#ccc]"
                  to="/login"
                  v-show="!checkLog.login"
                >
                  Login
                </router-link>
              </li>
              <li>
                <router-link
                  class="hover:underline decoration-[#ccc]"
                  to="/sign-up"
                  v-show="!checkLog.login"
                >
                  Sign Up
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="navbar__overlay fixed top-0 left-0 right-0 bottom-0 bg-black opacity-0 invisible z-10"
            @click="toggleMenu()"
          ></div>
        </div>
      </div>
      <div
        class="flex items-center gap-[188px] max-tablet:gap-6 max-tablet:ml-4"
      >
        <router-link to="/" class="font-bold select-none">
          its'Dainji
        </router-link>
        <nav class="flex gap-12 max-tablet:hidden">
          <router-link class="hover:underline decoration-[#ccc]" to="/">
            Home
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/contact">
            Contact
          </router-link>
          <router-link class="hover:underline decoration-[#ccc]" to="/about">
            About
          </router-link>
          <router-link
            class="hover:underline decoration-[#ccc] max-pc:hidden"
            to="/login"
            v-show="!checkLog.login"
          >
            Login
          </router-link>
        </nav>
        <div class="w-10 h-10 hidden max-tablet:block">
          <img class="w-full h-full" src="@/assets/fonts/cart.svg" alt="" />
        </div>
      </div>
      <div class="flex items-center gap-6">
        <div class="relative flex items-center max-tablet:hidden">
          <input
            @input="searchInput()"
            class="bg-[#f5f5f5] rounded-lg border-none outline-none py-3 px-4 pr-16 max-tablet:hidden"
            type="text"
            placeholder="What are you looking for?"
          />
          <img
            class="absolute right-0 mr-3 select-none h-[30px] w-[30px]"
            src="@/assets/fonts/search.svg"
            alt=""
          />
        </div>
        <div class="flex items-center gap-4">
          <router-link to="/wish-list">
            <img
              class="cursor-pointer max-tablet:hidden"
              src="@/assets/fonts/heart.svg"
              alt=""
            />
          </router-link>
          <router-link to="/cart">
            <img
              class="cursor-pointer max-tablet:hidden"
              src="@/assets/fonts/cart.svg"
              alt=""
            />
          </router-link>
          <div class="flex flex-col relative" v-if="checkLog.login">
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
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => alert("Signed out"))
        .catch((err) => alert(err.message));
      checkLog.login = false;
      router.replace("/");
    };
    const checkLog = Checklogin();
    return {
      Logout,
      checkLog,
      showSetting: ref("hidden"),
      isHidden: ref("hiddenMenu"),
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
    toggleMenu() {
      if (this.isHidden == "hiddenMenu") {
        this.isHidden = "showMenu";
      } else {
        this.isHidden = "hiddenMenu";
      }
      console.log(this.isHidden);
    },
  },
};
</script>
<style scoped>
nav a.router-link-exact-active {
  text-decoration: underline;
  text-decoration-color: #ccc;
}
.hiddenMenu {
  translate: -100%;
  opacity: 0;
  transition: all 0.3s ease;
}
.showMenu {
  transition: all 0.3s ease-in-out;
}
.navbar__overlay {
  transition: opacity, visibility;
  transition-duration: 0.5s;
}
.showMenu ~ .navbar__overlay {
  opacity: 0.3;
  visibility: visible;
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
  background-color: rgba(0, 0, 0, 0.7);
  padding: 18px 12px 10px 20px;
}
.menu-setting > li {
  display: flex;
  align-items: center;
  gap: 16px;
}
/* .menu-setting > li > div > img {
  filter: invert(1);
} */
.menu-setting > li:hover > p {
  color: blue;
}
.menu-setting > li > p {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #fff;
}
.menu-setting > li > div {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

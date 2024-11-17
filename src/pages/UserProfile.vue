<template>
  <div class="mt-20 max-w-[1170px] mx-auto">
    <div class="max-tablet:mx-3">
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>My Account</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="mt-20 flex gap-[100px]">
      <div class="flex-1 py-10 px-2">
        <h1 class="text-primary">Edit Your Profile</h1>
        <div class="mt-4 w-full flex gap-14 max-tablet:grid">
          <div class="flex flex-col gap-2 w-full">
            <label for="firstName">First Name</label>
            <input type="text" v-model="firstName" :class="inputStyle" />
          </div>
          <div class="flex flex-col gap-2 w-full">
            <label for="lastName">Last Name</label>
            <input type="text" v-model="lastName" :class="inputStyle" />
          </div>
        </div>
        <div class="mt-6 w-full flex gap-14">
          <div class="flex flex-col gap-2 w-full">
            <label for="email">Email</label>
            <input type="email" v-model="email" :class="inputStyle" />
          </div>
        </div>
        <div class="mt-6 float-right">
          <button
            class="bg-primary px-12 py-4 rounded text-white font-medium"
            @click="toggleEditMode"
            v-show="showEditBtn"
          >
            Edit Informations
          </button>
          <div class="flex items-center rounded gap-6" v-show="showUpdateBtn">
            <button class="bg-gray-100 px-5 py-4" @click="toggleEditMode">
              cancel
            </button>
            <button
              class="bg-primary px-12 py-4 rounded text-white font-medium"
              @click="updateUserProfile"
            >
              updateProfile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, updateProfile } from "firebase/auth";
import "firebase/auth";
import User from "@/store/getUser";
export default {
  data() {
    return {
      inputStyle: "unselectable",
      showEditBtn: true,
      showUpdateBtn: false,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
  async mounted() {
    const user = await User().getCurrentUser();
    this.getNameUser();
    this.email = await user.email;
  },
  methods: {
    async getNameUser() {
      const user = await User().getCurrentUser();
      let name = user.displayName;
      console.log(name);
      for (var i = name.length; i >= 0; i--) {
        if (name[i] == " ") {
          for (var j = i; j < name.length; j++) {
            this.lastName += name[j];
          }
          for (var j = 0; j < i; j++) {
            this.firstName += name[j];
          }
          break;
        }
      }
    },
    async toggleEditMode() {
      if (this.showEditBtn) {
        this.inputStyle = "select";
      } else {
        this.inputStyle = "unselectable";
      }
      this.showUpdateBtn = !this.showUpdateBtn;
      this.showEditBtn = !this.showEditBtn;
    },
    async updateUserProfile() {
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: `${this.firstName} ${this.lastName}`,
        email: this.email,
        photoURL: `${this.address}`,
      })
        .then(() => {
          console.log(auth.currentUser);
          this.inputStyle = "unselectable";
          this.showUpdateBtn = !this.showUpdateBtn;
          this.showEditBtn = !this.showEditBtn;
          alert("profile is updated");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.unselectable,
.select {
  background-color: #f5f5f5;
  padding: 13px 12px 13px 12px;
  font-family: "Times New Roman";
  font-size: 18px;
}
.unselectable {
  pointer-events: none;
}
</style>

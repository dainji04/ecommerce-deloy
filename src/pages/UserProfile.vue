<template>
  <div class="mt-20 max-w-[1170px] mx-auto">
    <div>
      <a-breadcrumb>
        <a-breadcrumb-item>
          <router-link to="/"> Home </router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>My Account</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="mt-20 flex gap-[100px]">
      <div>
        <div>
          <h1 class="font-medium">Manage My Account</h1>
          <div class="mt-4 pl-9 flex flex-col gap-2 cursor-pointer">
            <p class="text-primary">My Profile</p>
            <p class="opacity-50">Address Book</p>
            <p class="opacity-50">My Payment Options</p>
          </div>
        </div>
        <div class="mt-6">
          <h1 class="font-medium">My Orders</h1>
          <div class="opacity-50 mt-4 pl-9 flex flex-col gap-2 cursor-pointer">
            <p>My Returns</p>
            <p>My Cancellations</p>
          </div>
        </div>
        <div class="mt-4">
          <h1 class="font-medium">My WishList</h1>
        </div>
      </div>
      <div class="flex-1 py-10 px-2">
        <h1 class="text-primary">Edit Your Profile</h1>
        <div class="mt-4 w-full flex gap-14">
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
          <div class="flex flex-col gap-2 w-full">
            <label for="phoneNumber">Phone Number</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              v-model="phoneNumber"
              :class="inputStyle"
            />
          </div>
        </div>
        <div class="mt-6 w-full flex gap-14">
          <div class="flex flex-col gap-2 w-full">
            <label for="address">Address</label>
            <input type="text" v-model="address" :class="inputStyle" />
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
import firebase from "firebase/compat/app";
import "firebase/auth";

export default {
  data() {
    return {
      inputStyle: "unselectable",
      showEditBtn: true,
      showUpdateBtn: false,
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    toggleEditMode() {
      if (this.showEditBtn) {
        const user = firebase.auth().currentUser;
        console.log(1);

        let name = user.displayName;
        this.email = user.email;
        this.phoneNumber = user.phoneNumber;

        if (name) {
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
        }

        this.inputStyle = "select";
      } else {
        this.resetInput();
        this.inputStyle = "select";
      }
      this.showUpdateBtn = !this.showUpdateBtn;
      this.showEditBtn = !this.showEditBtn;
    },
    resetInput() {
      this.inputStyle = "unselectable";
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.phoneNumber = "0907165254";
      this.address = "";
    },
    updateUserProfile() {
      const user = firebase.auth().currentUser;

      user
        .updateProfile({
          displayName: `${this.firstName}${this.lastName}`,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
          email: this.email,
          phoneNumber: "0907165254",
        })
        .then(() => {
          this.showUpdateBtn = false;
          this.showEditBtn = true;
          this.resetInput();
          console.log("update success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.unselectable {
  background-color: #f5f5f5;
  padding: 13px 8px 13px 0;
  pointer-events: none;
}

.select {
  background-color: #f5f5f5;
  padding: 13px 8px 13px 0;
}
</style>

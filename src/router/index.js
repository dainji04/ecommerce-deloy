import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../layouts/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../pages/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/wish-list",
    name: "wish-list",
    component: () => import("../pages/WishList.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../pages/Cart.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () => import("../pages/notFound.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () => import("../pages/Checkout.vue"),
  },
  {
    path: "/:nameList/:id",
    name: "itemsDetails",
    component: () => import("../pages/itemsDetails.vue"),
    props: true, // Pass route parameters as props to the component
  },
  {
    path: "/user/profile",
    name: "userProfile",
    component: () => import("../pages/UserProfile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

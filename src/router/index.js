import { createRouter, createWebHistory } from "vue-router";

import { getAuth, onAuthStateChanged } from "firebase/auth";
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
    component: () =>
      import(/* webpackChunkName: "contact" */ "../pages/Contact.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../pages/SignUp.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/Login.vue"),
  },
  {
    path: "/wish-list",
    name: "wish-list",
    component: () =>
      import(/* webpackChunkName: "wishlist" */ "../pages/WishList.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunkName: "cart" */ "../pages/Cart.vue"),
  },
  {
    path: "/complete-order",
    name: "complete-order",
    component: () =>
      import(/* webpackChunkName: "complete" */ "../pages/OrderComplete.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../pages/notFound.vue"),
  },
  {
    path: "/checkout",
    name: "checkout",
    component: () =>
      import(/* webpackChunkName: "checkout" */ "../pages/Checkout.vue"),
  },
  {
    path: "/product/:nameList/:id",
    name: "itemsDetails",
    component: () =>
      import(
        /* webpackChunkName: "itemsdetails" */ "../pages/itemsDetails.vue"
      ),
    props: true, // Pass route parameters as props to the component
  },
  {
    path: "/user/profile",
    name: "userProfile",
    component: () =>
      import(/* webpackChunkName: "userprofile" */ "../pages/UserProfile.vue"),
    meta: { requiresAuth: true }, // Add meta property to require authentication for this route
  },
  {
    path: "/products/:nameList",
    name: "allProducts",
    component: () =>
      import(/* webpackChunkName: "allproducts" */ "../pages/allProducts.vue"),
    props: true, // Pass route parameters as props to the component
  },
];

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import homePage from "@/pages/home/home-page.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: homePage,
    },
    {
      path: "/shoes",
      name: "shoes",
      component: () => import("@/pages/shoes/shoose-page.vue"),
    },
    {
      path: "/clothes",
      name: "clothes",
      component: () => import("@/pages/clothes/clothes-page.vue"),
    },
    {
      path: "/accessory",
      name: "accessories",
      component: () => import("@/pages/accessiories/accessory-page.vue"),
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("@/pages/account/account-page.vue"),
      children: [
        {
          path: "/account/user-info",
          name: "UserInfo",
          component: () => import("@/pages/account/user-info.vue"),
        },
        {
          path: "/account/user-address",
          name: "UserAddress",
          component: () => import("@/pages/account/address-book.vue"),
        },
        {
          path: "/account/user-order",
          name: "UserOrder",
          component: () => import("@/pages/account/user-order.vue"),
        },
      ],
    },
  ],
});

export default router;

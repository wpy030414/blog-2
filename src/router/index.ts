import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.+)",
      redirect: "/404",
    },
    {
      path: "/",
      component: () => import("@/views/Main.vue"),
    },
    {
      path: "/mdhu-project",
      // component: () => import("@/views/MDHP.vue"),
      redirect: "/404",
    },
    {
      path: "/404",
      component: () => import("@/views/404.vue"),
    },
  ],
});

export default router;

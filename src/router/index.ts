import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.+)",
      redirect: "/404",
    },
    {
      path: "/404",
      component: () => import("@/views/404.vue"),
    },
    {
      path: '/',
      component: () => import('@/views/Portal.vue'),
    },
    {
      path: '/blog',
      component: () => import('@/views/Blog.vue'),
    },
    {
      path: '/aphorism',
      component: () => import('@/views/Aphorism.vue'),
    },
    {
      path: '/galary',
      component: () => import('@/views/Galary.vue'),
    },
    {
      path: '/museum',
      component: () => import('@/views/Museum.vue'),
    },
    {
      path: '/mdhu-project',
      component: () => import('@/views/MDHuProject.vue'),
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/sponsor',
      component: () => import('@/views/Sponsor.vue'),
    },
  ],
});

export default router;

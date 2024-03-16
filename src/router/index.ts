import { createRouter, createWebHistory } from 'vue-router'
import index from '@/views/home/index.vue'
index

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/home/index.vue")
    },
  ]
})

export default router

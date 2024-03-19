import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/home/index.vue")
    },
    {
      path: '/mujer',
      name: 'mujer',
      component: () => import("../views/mujer/index.vue")
    },
    {
      path: '/hombre',
      name: 'hombre',
      component: () => import("../views/hombre/index.vue")
    },
    {
      path: '/accesorios',
      name: 'accesorios',
      component: () => import("../views/accesorios/index.vue")
    }
  ]
})

export default router

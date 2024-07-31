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
    },
    {
      path: '/producto/:slug',
      name: 'ProductoDetalle',
      component: () => import("../views/producto/index.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../views/login.vue")
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import("../views/registro.vue")
    },
    // cuenta usuario
    {
      path: '/mi-cuenta',
      name: 'mi-cuenta',
      component: () => import('../views/mi-cuenta/index.vue')
    }
  ]
})

export default router

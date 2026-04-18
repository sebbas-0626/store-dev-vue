import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../../views/home/HomeView.vue")
    },
    {
      path: '/mujer',
      name: 'mujer',
      component: () => import("../../views/mujer/index.vue")
    },
    {
      path: '/hombre',
      name: 'hombre',
      component: () => import("../../views/hombre/index.vue")
    },
    {
      path: '/accesorios',
      name: 'accesorios',
      component: () => import("../../views/accesorios/index.vue")
    },
    {
      path: '/producto/:slug',
      name: 'ProductoDetalle',
      component: () => import("../../views/producto/index.vue")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../../views/auth/login.vue"),
      meta: { requiresGuest: true }
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import("../../views/auth/registro.vue"),
      meta: { requiresGuest: true }
    },
    {
      path: '/mi-cuenta',
      name: 'mi-cuenta',
      component: () => import('../../views/mi-cuenta/index.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// Route guards
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  
  // Check if route requires authentication
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: 'login', query: { redirect: to.fullPath } })
    return
  }
  
  // Check if route requires guest (redirect if already logged in)
  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: 'mi-cuenta' })
    return
  }
  
  next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makanan',
    name: 'Makanan',
    component: () => import('../views/Makanan.vue')
  },
  {
    path: '/makanan/:id',
    name: 'MakananDetail',
    component: () => import('../views/detail/MakananDetail.vue')
  },
  {
    path: '/tarian',
    name: 'Tarian',
    component: () => import('../views/Tarian.vue')
  },
  {
    path: '/tarian/:id',
    name: 'TarianDetail',
    component: () => import('../views/detail/TarianDetail.vue')
  },
  {
    path: '/adat',
    name: 'Adat',
    component: () => import('../views/Adat.vue')
  },
  {
    path: '/adat/:id',
    name: 'AdatDetail',
    component: () => import('../views/detail/AdatDetail.vue')
  },
  {
    path: '/alat-musik',
    name: 'AlatMusik',
    component: () => import('../views/AlatMusik.vue')
  },
  {
    path: '/alat-musik/:id',
    name: 'AlatMusikDetail',
    component: () => import('../views/detail/AlatMusikDetail.vue')
  },
  {
    path: '/senjata',
    name: 'Senjata',
    component: () => import('../views/Senjata.vue')
  },
  {
    path: '/senjata/:id',
    name: 'SenjataDetail',
    component: () => import('../views/detail/SenjataDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
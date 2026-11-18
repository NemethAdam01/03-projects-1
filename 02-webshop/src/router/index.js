import { createRouter, createWebHistory } from 'vue-router'
import GuitarListView from '../views/GuitarListView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'guitarsList',
      component: GuitarListView,
    }
  ],
})

export default router

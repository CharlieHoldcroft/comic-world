import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Collection from '../views/Collection.vue'
import Wishlist from '../views/Wishlist.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/collection',
      component: Collection
    },
    {
      path: '/wishlist',
      component: Wishlist
    }
  ]
})

export default router
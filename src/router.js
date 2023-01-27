import { createRouter, createWebHistory } from 'vue-router'

import e404 from './views/404.vue'
import home from './views/home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/:catchAll(.*)',
      component: e404,
    },
  ],
})
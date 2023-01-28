import { createRouter, createWebHistory } from 'vue-router'

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
      redirect: { path: '/' }
    },
  ],
})
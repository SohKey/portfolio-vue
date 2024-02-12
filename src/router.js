import { createRouter, createWebHistory } from 'vue-router'

import home from './views/home.vue'
import game from './views/game.vue'
import p404 from './views/404.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: home,
    },
    {
      path: '/gamepreview',
      component: game,
    },
    {
      path: '/:catchAll(.*)',
      component: p404,
    },
  ],
})
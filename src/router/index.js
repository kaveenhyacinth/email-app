import { createRouter, createWebHistory } from 'vue-router'
import EmailInboxVue from '../views/EmailInbox.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/inbox',
      name: 'inbox',
      component: EmailInboxVue
    },
    {
      path: '/archive',
      name: 'archive',
      component: EmailInboxVue
    }
  ]
})

export default router

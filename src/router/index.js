import { createRouter, createWebHistory } from 'vue-router'
import EmailInboxVue from '../views/EmailInbox.vue'
import EmailArchiveVue from '../views/EmailArchive.vue'

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
      component: EmailArchiveVue
    }
  ]
})

export default router

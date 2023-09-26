import { createRouter, createWebHistory } from 'vue-router'
import BoardsList from '@/views/BoardsList.vue'
import MainBoard from '@/views/MainBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: MainBoard },
    { path: '/boards_list', component: BoardsList }
  ]
})

export default router

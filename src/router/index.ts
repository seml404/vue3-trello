import { createRouter, createWebHistory } from 'vue-router'
import { UserSpace } from '@/types'
import MainBoard from '@/views/MainBoard.vue'
import BoardsList from '@/views/BoardsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: UserSpace.Path.HOME,
      component: BoardsList
    },
    {
      path: '/main_board',
      name: UserSpace.Path.MAIN_BOARD,
      component: () => import('@/views/MainBoard.vue')
    }
  ]
})

export default router

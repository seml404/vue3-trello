import { createPinia } from 'pinia'
import type { App as AppType } from 'vue'
import router from '@/router'
import { drop_down_menu, add_btn } from '@/components'
import draggable from 'vuedraggable'

export const factoryMain = (app: AppType) => {
  app
    .use(createPinia())
    .use(router)
    .component('DropDownMenu', drop_down_menu)
    .component('AddBtn', add_btn)
    .component('Draggable', draggable)
  app.mount('#app')
}

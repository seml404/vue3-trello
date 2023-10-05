import { createApp } from 'vue'
import { createPinia } from 'pinia'
import type { App as AppType } from 'vue'
import router from '@/router'
import { drop_down_menu, add_btn } from '@/components'

export const factoryMain = (app: AppType) => {
  app
    .use(createPinia())
    .use(router)
    .component('DropDownMenu', drop_down_menu)
    .component('AddBtn', add_btn)
  app.mount('#app')
}

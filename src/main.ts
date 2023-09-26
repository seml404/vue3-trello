import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'
import { drop_down_menu } from './components'

const app = createApp(App)

app.use(createPinia()).use(router).component('DropDownMenu', drop_down_menu)

app.mount('#app')

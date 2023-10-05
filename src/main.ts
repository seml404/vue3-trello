import { createApp } from 'vue'
import '@/index.css'
import App from '@/App.vue'
import { factoryMain } from '@/service/main'

const app = createApp(App)
factoryMain(app)

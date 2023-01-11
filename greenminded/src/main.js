import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from '@/plugins/axiosInstance.js'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


const app = createApp(App)

app.use(router)
app.mount('#app')
app.config.globalProperties.$axois = axios
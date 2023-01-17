import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from '@/plugins/axiosInstance.js'

import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap"
import "@/assets/css/animate.min.css"
//import "./assets/css/bootstrap.min.css"
import "@/assets/css/jquery.nouislider.min.css"
import "@/assets/css/owl.carousel.css"
import "@/assets/css/owl.theme.default.css"
import "@/assets/css/style.css"
import "@/assets/css/sweetalert.css"

import "@/assets/css/font.css"


const app = createApp(App)

app.use(router)
app.mount('#app')
app.config.globalProperties.$axois = axios
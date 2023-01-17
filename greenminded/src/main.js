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

// import "@/assets/fonts/font-awesome/css/font-awesome.min.css"
// import "@/assets/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
// import "@/assets/fonts/pe-icon-7-stroke/css/helper.css"
// import "@/assets/fonts/pe-icon-social/css/pe-icon-social.css"
// import "@/assets/fonts/pe-icon-social/css/helper.css"
// import "@/assets/fonts/quicksand-dash/stylesheet.css"


const app = createApp(App)

app.use(router)
app.mount('#app')
app.config.globalProperties.$axois = axios
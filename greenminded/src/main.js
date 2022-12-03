import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

// Declare use of VueRouter
// Vue.use(VueRouter)

createApp(App).use(router).mount('#app')
import {createRouter, createWebHashHistory} from 'vue-router'
import Result from '../new_components/Result'
import Main from '../new_components/Main'
import Login from '@/new_components/main_components/login/Login.vue'

const routes = [
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Main,

    },
    {
        name: 'result',
        path: '/result/:query?',
        component: Result,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
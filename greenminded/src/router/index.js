import {createRouter, createWebHashHistory} from 'vue-router'
import Result from '../components/Result'
import Main from '../components/Main'

const routes = [
    {
        path: '/',
        component: Main,

    },
    {
        path: '/result',
        component: Result,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
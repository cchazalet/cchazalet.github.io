import {createRouter, createWebHashHistory} from 'vue-router'
import Result from '../new_components/Result'
import Main from '../new_components/Main'

const routes = [
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
import {createRouter, createWebHashHistory} from 'vue-router'
import Result from '../new_components/Result'
import Main from '../new_components/Main'
import Login from '@/new_components/main_components/Login'
import BlogPage from '@/new_components/main_components/BlogPage'
import CreateBlog from '@/new_components/main_components/CreateBlog'

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
        path: '/blogpage',
        component: BlogPage,
    },
    {
        path: '/createBlog',
        component: CreateBlog,
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
    scrollBehavior() {
        return {x: 0, y: 0}
    }
})

export default router
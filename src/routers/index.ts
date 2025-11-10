import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import('../views/AuthView.vue')
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
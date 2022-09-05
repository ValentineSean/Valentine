import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import MainLayout from '../layouts/MainLayout.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            layout: 'MainLayout',
        },
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router

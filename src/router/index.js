import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import DashboardView from '../views/Dashboard.vue'
import HomeView from '../views/Home.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    }, {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardView
    }, {
        path: '/login',
        name: 'Login',
        component: LoginView
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
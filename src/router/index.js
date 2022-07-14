import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/LoginPages.vue'
import Register from '../components/RegisterPages.vue'
import Home from '../views/HomePages.vue'



Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/Login' },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
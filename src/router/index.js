import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import VueCookie from 'vue-cookie'

// component
import Welcome from '@/components/Welcome'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Reg from '@/components/Reg'


Vue.use(Router)
Vue.use(VueResource)
Vue.use(VueCookie)

export default new Router({
    routes: [{
        path: '/',
        name: 'Register',
        component: Reg
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/hello',
        name: 'Hello',
        component: Hello
    }, {
        path: '/reg',
        name: 'Register',
        component: Reg
    }]
})
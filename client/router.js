import Vue from 'vue'
import Router from 'vue-router'

// load all views from the ./client/views directory
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Users from './views/Users.vue';
import User from './views/User.vue';
import ProductAdmin from './views/ProductAdmin.vue';
import ProductsBySeason from './views/ProductsBySeason.vue';

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/products',
            name: 'products-by-season',
            component: ProductsBySeason
        },
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/users',
            name: 'users',
            component: Users
        },
        {
            path: '/users/:username',
            name: 'user',
            component: User,
            props: true 
        },
        {
            path: '/product-admin',
            name: 'product-admin',
            component: ProductAdmin
        }
        // },
        // {
        //     path: '/currentproducts',
        //     name: 'products',
        //     component: Products
        // }
    ]
});
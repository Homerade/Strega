<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to='/'><h1>Strega.</h1></router-link>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <router-link class="nav-link" to='/products'>Products</router-link>
            </li>
            <li class="nav-item" v-show='!isLoggedIn'>
                <router-link class="nav-link" to='/register'>Start an Account</router-link>
            </li>
            <li class="nav-item" v-show='!isLoggedIn'>
                <router-link class="nav-link" to='/login'>Login</router-link>
            </li>
            <li class="nav-item" v-show="isLoggedIn">
                <router-link class="nav-link" to='/users'>Users</router-link>
            </li>
             <li class="nav-item">
                <router-link class="nav-link" to='/product-admin'>Admin</router-link>
            </li>
        </ul>
        <ul class='navbar-nav' v-show='isLoggedIn'>
            <li class='nav-item dropdown'>
                <a class='nav-link dropdown-toggle' href='#' id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {{ username }}
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" @click="logout">Logout</a>
                </div>                
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: mapState({
        username: state => state.user ? state.user.username : '',
        isLoggedIn: 'isLoggedIn'
    }),
    methods: mapActions(['logout'])
}
</script>

<style>
    body {
        font-family: courier;
    }

    li {
        display: block;
        padding: 1vw;
    }
</style>
<!-- <style>
    /*@import url("https://fonts.googleapis.com/css?family=PT+Mono" rel="stylesheet");*/
    @font-face {
        font-family: 'PT Mono';
        src: url(../../public/assets/fonts/PTMono.ttf) format('ttf');
    }
    
    body {
    font-family: 'PT Mono', monospace;
    }

</style>  -->   
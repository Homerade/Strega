<template>
    <div id="app">
        <NavBar></NavBar>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
    components: {
        NavBar,

    },
    mounted() {
        this.$store.dispatch('start');
    },

};
</script>

<style>
    .container-fluid {
        padding: 0;
    }

    .fa-icon {
      width: auto;
      height: 1.75vw; /* or any other relative font sizes */

      /* You would have to include the following two lines to make this work in Safari */
      max-width: 100%;
      max-height: 100%;
    }
</style>    
<template>
<div>
    <div>{{ products }}</div>
    <p>something here</p>
</div>
</template>

<script>
    import Vue from 'vue';
    import { mapState, mapActions } from 'vuex';

    export default {

        data() {
            return {
                products: []
            }
        },
        
        computed: {
			products() {
				return console.log(`OK, ${this.$store.state.products}`);
            }
		},
        
        mounted() {
                    this.$store.dispatch('retrieveProducts');			
                }
    };        
</script>
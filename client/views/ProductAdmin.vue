<template>
<div>
	<form @submit.prevent="editNewProduct">
		<h3>Edit existing product</h3>
		<div class='form-group'>
			<label name='productSelect'>Select product to edit</label>
			<v-select v-model="selected" label='name' :options="products" ></v-select>
		</div>
		<div class='form-group'>  
		    <label name='editProductName'>Edit Name</label>
		    <input name='editProductName' class="form-control" type="text">
		</div>
		<div class='form-group'>    
		    <label name='editProductPrice'>Edit Price</label>
		    <input name='editProductPrice' class="form-control" type='number' min="0.00" max="100000.00" step="0.01">
		</div>   
		<div class="form-group"> 
		    <label>Pricing Unit</label>
		    <v-select label='pricingUnit' :options="['lb','ml','g']"></v-select>
		</div>    
		<div class='form-group'>
		    <input type="checkbox" name="editIsActive">
		    <label name='editIsActive'>Make active online</label>
		</div>    
		    <button class='btn btn-primary' :disabled='isAddingProduct'>
				<span v-show='isAddingProduct'>
					<icon name="spinner" pulse></icon>
					&nbsp;</span>Edit product</button>
		   
	</form>	

	<form @submit.prevent="postNewProduct">
		<h3>Add new product</h3>
		<p id='errorMsg'>something</p>
		<div class='form-group'>
			<label for='newProductName'>Product Name</label>
            <input name="newProductName" class="form-control" type="text" v-model='newProductName' :disabled='isAddingProduct'>
        </div>
        <div class="form-group">    
        	<label for="newProductPrice">Product Price</label>
            <input name="newProductPrice" class="form-control" type="number" min="0.00" max="100000.00" step="0.01" v-model='newProductPrice' :disabled='isAddingProduct'>
        </div>
        <div class="form-group">
        	<label for="newProductPriceUnit">Price per Unit</label>
        	<v-select v-model='newProductPriceUnit' :options="['lb','ml','g']" :disabled='isAddingProduct'></v-select>
        </div>   
        <div class="form-group"> 
            <input type="checkbox" name="newProductIsActive" v-model='newProductIsActive'>
            <label name='newProductIsActive'>Make active online</label>
        </div>
			<button class='btn btn-primary' :disabled='isAddingProduct'>
				<span v-show='isAddingProduct'>
					<icon name="spinner" pulse></icon>
					&nbsp;</span>Add new product</button>
	</form>
</div>					
</template>

<script>
	import Vue from 'vue'; //what's this for?
	import vSelect from 'vue-select'
	import 'vue-awesome/icons/spinner';
	import Icon from 'vue-awesome/components/Icon.vue';

	Vue.component('v-select', vSelect)
	
	import { mapState, mapActions } from 'vuex'; //need this?
	export default {
		data() {
			return {
				newProductName: '',
				newProductPrice: null,
				newProductPriceUnit: '',
				newProductIsActive: false,
				isAddingProduct: false,
				// selected: {}
			}
		},
		computed: {
			products() {
				return this.$store.state.products;
			}
		},	
		// ...check that all fields are filled out

		// ...check and warn if product name already exists
		// 	productNameExists: function() {
		// 		return this.newProductName !== '' &&
		// 			this.
		// 	}
		methods: {
			postNewProduct: function() {
				if(!this.newProductName) {
					// alert('Please add product name');
					// document.getElementById('errorMsg').show().textContent('Please add a product name');
					// this.newProductName.focus();
					
				} else if (!this.newProductPrice) {
					alert('Please add product price');
					this.newProductPrice.focus();
					 
				} else if (!this.newProductPriceUnit) {
					alert('Please add a price unit');
					this.newProductPrice.focus();

				} else {
				this.isAddingProduct = true;	
				this.$http.post('/product', {
					name: this.newProductName,
				    price: this.newProductPrice,
				    pricingUnit: this.newProductPriceUnit,
				    isActive: this.newProductIsActive
				}).then(response => {
					this.newProductName = '';
					this.newProductPrice = null;
					this.newProductPriceUnit = '';
					this.newProductIsActive = false;
					this.errorMsg.show()
						.textContent('Your new product has been added')
						.style.color = 'green';
				}).catch(response => onsole.log('something broke', response
				)).finally(() => this.isAddingProduct = false);
			  }
			},
			// showSelected: function() {
			// 	console.log({selected});
			// }  
		},
		mounted() {
			this.$store.dispatch('retrieveProducts');

			// document.getElementById('errorMsg').hide();
			
		},

	}	

</script>

<style>
	form {
		margin: 10vh 10vw 20vh;
	}

	h3 {
		margin-bottom: 5vh;		
	}

	v-select {
		font-family: inherit; 
	}

</style>


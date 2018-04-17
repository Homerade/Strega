<template>
<div>
	<form @submit.prevent="editProduct">
		<h3>Edit existing product</h3>
		<div class='form-group'>
			<label for='productSelect'>Select product to edit</label>
			<v-select v-model="selected" label='name' :options="products" placeholder='search products...' @input='selectedProduct'></v-select>
		</div>
		<div class='form-group'>  
		    <label for='editProductName'>Edit Name</label>
		    Name: <input name='editProductName' v-model='productName' class="form-control" type="text">
		</div>
		<div class='form-group'>    
		    <label for='editProductPrice'>Edit Price</label>
		    <input name='editProductPrice' v-model='selected.price' class="form-control" type='number' min="0.00" max="100000.00" step="0.01">
		</div>   
		<div class="form-group"> 
		    <label for='editPricingUnit'>Pricing Unit</label>
		    <v-select name='editPricingUnit' label='pricingUnit' v-model='selected.pricingUnit' :options="['lb','ml','g']"></v-select>
		</div>    
		<div class='form-group'>
		    <input type="checkbox" name="editIsActive" id='editIsActive' v-model='selected.isActive'>
		    <label for='editIsActive'>Make active online</label>
		</div>    
		    <button class='btn btn-primary' :disabled='isAddingProduct'>
				<span v-show='isAddingProduct'>
					<icon name="spinner" pulse></icon>
					&nbsp;</span>Edit product</button>
		   
	</form>	

	<form @submit.prevent="postNewProduct">
		<h3>Add new product</h3>
		<p v-bind:class="{ 'text-danger': isError, 'text-success': isSuccess }" v-if='infoMsg'>{{ infoMsg }}</p>
		<div class='form-group'>
			<label for='newProductName'>Product Name</label>
            <input name="newProductName" class="form-control" type="text" v-model='newProductName' :disabled='isAddingProduct'>
        </div>
        <div class="form-group">    
        	<label for="newProductPrice">Product Price</label>
            <input name="newProductPrice" class="form-control" type="number" min="0.00" max="100000.00" step="0.01" v-model='newProductPrice' :disabled='isAddingProduct' ref='newProductPrice'>
        </div>
        <div class="form-group">
        	<label for="newProductPriceUnit">Price per Unit</label>
        	<v-select v-model='newProductPriceUnit' :options="['lb','ml','g']" :disabled='isAddingProduct'></v-select>
        </div>   
        <div class="form-group"> 
            <input type="checkbox" name="newProductIsActive" id='newProductIsActive' v-model='newProductIsActive'>
            <label for='newProductIsActive'>Make active online</label>
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

		components: {
			Icon
		},
		data() {
			return {
				newProductName: '',
				newProductPrice: null,
				newProductPriceUnit: '',
				newProductIsActive: false,
				isAddingProduct: false,
				selected: '',
				infoMsg: '',
				isError: false,
				isSuccess: false,
				productName: ''
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
			selectedProduct: function(product) {
				this.productName = product.name;
			},
			editProduct: function() {
				this.$http.put('/products/' + this.selected.id, {
					name: this.editProductName,
					price: this.editProductPrice,
					pricingUnit: this.editPricingUnit,
					isActive: this.editIsActive
				}).then(response => {
					this.editProductName = '';
					this.editProductPrice = null;
					this.editPricingUnit = '';
					this.editIsActive = false;
					this.infoMsg = 'Your product has been updated!';
					this.isSuccess = true;
				}).catch(response => console.log('something broke', response));
				
			},
			// myevent: function() {
			// 	if(!this.selected) {
			// 		this.selected = {name: ''};
			// 	}
			// },
		
			postNewProduct: function() {
				if(!this.newProductName) {
					this.infoMsg = 'Please add product name';
					this.isError = true;
					
				} else if (!this.newProductPrice) {
					this.infoMsg = 'Please add product price';
					this.isError = true;
					 
				} else if (!this.newProductPriceUnit) {
					this.infoMsg = 'Please add a price unit';
					this.isError = true;
					// this.newProductPrice.focus();

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
					this.infoMsg = 'Your product has been created';
					this.isSuccess = true;
				}).catch(response => console.log('something broke', response
				)).finally(() => this.isAddingProduct = false);
			  }
			},
			// showSelected: function() {
			// 	console.log({selected});
			// }  
		},
		mounted() {
			this.$store.dispatch('retrieveProducts');			
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


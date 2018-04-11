<template>
<div>	
	<!-- <form @submit.prevent="addNewProduct">
		<h3>Edit existing product</h3>
		<div class='form-group'>
			<input name='productSearch' class='form-control' type='text' v-model='search' placeholder="search products">
			<select class="form-control" id="databaseProducts">
		      <option>[{ database array.name }]</option>
		    </select>
		    <label name='editProductName'>Product Name</label>
		    <input name='editProductName' class="form-control" type="text">
		    <label name='editProductPrice'>Price</label>
		    <input name='editProductPrice' class="form-control" type='number' min="0.00" max="100000.00" step="0.01">
		    <label>Price per Unit</label>
		    <input name='editProductUnit' class="form-control" type="">
		    <label name='editIsActive'>Post online for sale</label>
		    <input type="radio" name="editIsActive">
		</div>    
	</form> -->	
	
	<form>	
		<div class='form-group'>
			<label for='newProductName'>Product Name</label>
            <input name="newProductName" class="form-control" type="text" v-model="newProduct" :disabled='isAddingTask'>
        </div>
        <div class="form-group">    
        	<label for="newProductPrice">Product Price</label>
            <input name="newProductPrice" class="form-control" type="number" min="0.00" max="100000.00" step="0.01" v-model="newProduct" :disabled='isAddingTask'>
        </div>
        <div class="form-group">
        	<label for="newProductUnit">Price per Unit</label>
            <input name="newProductUnit" class="form-control" type="text" v-model="newProduct" :disabled='isAddingTask'>
        </div>   
        <div class="form-group"> 
            <input type="radio" name="newProductIsActive">
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
	import 'vue-awesome/icons/spinner';
	import Icon from 'vue-awesome/components/Icon.vue';
	
	import { mapState, mapActions } from 'vuex'; //need this?
	export default {
		data() {
			return {
				newProductName: '',
				newProductPrice: 0,
				newProductUnit: '',
				newProductIsActive: false
			}
		},
		// computed: {
		// ...check that all fields are fill out

		// ...check and warn if product name already exists
		// 	productNameExists: function() {
		// 		return this.newProductName !== '' &&
		// 			this.
		// 	}
		methods: {
			postNewProduct: function() {
				this.$http.post('/product-admin', {
					name: this.newProductName,
				    price: this.newProductPrice,
				    unit: this.newProductUnit,
				    isActive: this.newProductIsActive
				}).then(response => {
					console.log('product sent to DB');
				})
			}
		}
	};
	

</script>


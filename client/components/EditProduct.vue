<template>
	<form @submit.prevent="addNewProduct">
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
	</form>	
</template>

<script>
	import Product from './Product.vue'
</script>	
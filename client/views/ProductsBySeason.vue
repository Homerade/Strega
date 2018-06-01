<template>
	<div class="container-fluid"> 

		<router-link to='/products-all'>
			<section class="summer row">						
				<div class="col-lg-12">					
					<img src="assets/images/prodBySeas/summer_cuke.jpg" class="float-right">
					<span class="float-right">SUMMER</span>
				</div>								
			</section>
		</router-link>	

		<router-link to='/products-all'>
			<section class="fall row">
				<div class="col-lg-12">
					<img src="assets/images/prodBySeas/fall_leaf.jpg">
					<span>FALL</span>
				</div>
			</section>
		</router-link>

		<router-link to='/products-all'>
			<section class="winter row">
				<div class="col-lg-12">					
					<img src="assets/images/prodBySeas/winter_artichoke.jpg" class="float-right">
					<span class="float-right">WINTER</span>
				</div>	
			</section>	
		</router-link>

		<router-link to='/products-all'>
			<section class="spring row">
				<div class="col-lg-12">
					<img src="assets/images/prodBySeas/spring_scene.jpg">
					<span>SPRING</span>
				</div>	
			</section>
		</router-link>

	</div>	
</template>

<style type="text/css">

	.row, .col-lg-12 {
		padding: 0;
	}

	.fall {
		background-color: #faeee7;
		text-decoration: none;
	}

	.winter {
		background-color: #f5f7f9;
	}

	.spring {
		background-color: #f5fdf3;
	}

	.summer {
		background-color: #effffe;
	}

	section img {
		height: 40vh;
	}

</style>
<template>
	<div>

		<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
		  <div class="carousel-inner">
		    <div class="carousel-item active">
		      <img class="d-block w-50" src="/assets/images/handFull_rs.jpg" alt="First slide">
		    </div>
		    <div class="carousel-item">
		      <img class="d-block w-50" src="/assets/images/whiteAsperge.jpg" alt="Second slide">
		    </div>
		    <div class="carousel-item">
		      <img class="d-block w-50" src="/assets/images/microgreenBox_rs.jpg" alt="Third slide">
		    </div>
		  </div>
		</div>

		<section class="bg-light">
			<div class="about">
				<h2>This is us</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
		</section>

		<section class="mc_integration">
			<img class="d-block w-25" src="/assets/images/mc_script_black_web.png" alt='mailchimp'>
		</section>	

		<section class="bg-light">
			<div class="moreStuff">
				<h2>Something else here?</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</div>
		</section>

		<footer class="navbar-light">
			<ul class="navbar-nav navbar-expand-lg justify-content-between">

				<li class="nav-item collapse navbar-collapse">
					<a class="nav-link" href='/'><icon class="icon" name="facebook"></icon></a>
					<a class="nav-link" href='https://twitter.com/stregaprov?lang=en'><icon class="icon" name="twitter"></icon></a>
					<a class="nav-link" href='https://www.instagram.com/stregaprovisions/?hl=en'><icon class="icon" name="instagram"></icon></a>
					<!-- <a href="https://www.instagram.com/stregaprovisions/?hl=en"><icon class="icon" name="instagram"></icon></a> -->
				</li>


				<li class="nav-item active">
	                <router-link class="nav-link" to='/contact'>Contact</router-link>
	            </li>
	            
	            <li class="nav-item active">
	                <span class="nav-link"><icon class="icon cc" name="copyright"></icon>adastrea</span>
	            </li>
	        </ul>    
	        <!-- navbar-light = link and hover coloring -->
	        <!-- justify-content-between = send nav items to extremes -->
	        <!-- nav-fill = have nav items with equal space all around them -->

		</footer>	

	</div>

</template>

<script type="text/javascript">

	import 'vue-awesome/icons/facebook';
	import 'vue-awesome/icons/twitter';
	import 'vue-awesome/icons/instagram';
	import 'vue-awesome/icons/copyright';
	import Icon from 'vue-awesome/components/Icon.vue';

	export default {
    components: {
        Icon
    }};
	
	$('.carousel').carousel({
	  interval: 1000
	})

</script>

<style type="text/css">
	
	.carousel-inner img {
	  margin: auto;
	}

	section {
		width: 100vw;
		padding: 2vw;
		overflow: auto;
	}

	.about {
		width: 50vw;
		margin: 0 10vw;
	}

	.about h2 {
		margin: 2vw 0;
	}

	.mc_integration img {
		margin: auto;
	}

	.moreStuff {
		width: 40vw;
		float: right;
		margin: 0 10vw;
	}

	footer {
		height: 10vh;
		background-color: #D7D2D5;
		overflow: auto;
	}

	footer .icon {
		margin: 0 .5vw;
		color: black;
	}

	.cc {
		height: 1.5vh;
	}

	/*footer span {
		margin: 0;
		color: #6c6c6c;
	}
*/
</style>
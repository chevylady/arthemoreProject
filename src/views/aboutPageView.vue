<template>
	<div class="wrapper">
		<section class="hero has-background-black">
			<div class="hero-body mx-0 py-5 columns is-flex-wrap-wrap">
				<div class="column is-12 py-1">
					<p class="title is-uppercase has-text-centered has-text-primary">O nas</p>
				</div>
				<div class="column is-6 has-text-light">
					<aboutComponent />
				</div>
				<div class="column is-6">
					<img src="../assets/graphics/about/allband.jpg" alt="members członkowie" />
				</div>
			</div>
		</section>
		<section class="hero is-black">
			<div class="hero-body py-5 hero-img">
				<p class="title has-text-centered has-text-light is-uppercase">skład</p>
				<membersCarousel />
			</div>
		</section>
		<section class="has-background-black pt-0 pb-0">
			<div class="hero-body py-5">
				<p class="title has-text-centered is-uppercase has-text-primary">KONTAKT</p>
				<div class="columns is-flex is-flex-direction-column is-justify-content-center">
					<div class="column is-flex is-justify-content-center is-align-items-center is-flex-wrap-wrap">
						<p class="is-size-5 is-size-3-desktop has-text-grey mr-3">
							<i class="fa-solid fa-envelope"></i>{{ emailAddress }}
						</p>
						<p class="is-size-5 is-size-3-desktop has-text-grey"><i class="fa-solid fa-phone"></i>{{ phoneNumber }}</p>
					</div>
					<div class="column is-flex is-justify-content-center py-0">
						<mediaComponent />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
import mediaComponent from '../components/mediaComponent.vue'
import aboutComponent from '../components/aboutComponent.vue'
import membersCarousel from '../components/membersCarousel.vue'

let phoneNumber = '609-760-732'
let emailAddress = 'arthemore@o2.pl'

const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()
</script>

<style lang="scss" scoped>
i {
	margin: 0 0.5em;
}
.hero-img {
	background-image: url('../assets/graphics/about/czlowiek-aboutpage.jpg');
	background-size: cover;
	background-position: center;
}
.mediaBar {
	padding: 1em 0;
}
@media (min-width: 1600px) {
	.hero-body {
		width: 70%;
		margin: 0 auto;
	}
}
</style>

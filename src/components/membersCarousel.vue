<template>
	<div class="carousel">
		<carousel :items-to-show="1" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true" alt="member photo">
			<Slide v-for="item in storeBandPhotos.bandPhotos" :key="item">
				<div class="card has-background-black">
					<p class="is-size-5-desktop has-text-primary py-1 px-1">{{ item.description }}</p>
					<img :src="item.src" alt="photo" class="img-carousel" />
				</div>
			</Slide>
			<template #addons>
				<navigation />
			</template>
		</carousel>
	</div>
</template>
<script setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { useBandPhotos } from '../stores/bandPhotos'

const storeBandPhotos = useBandPhotos()
const breakpoints = {
	200: {
		itemsToShow: 1,
		snapAlign: 'center',
	},

	768: {
		itemsToShow: 2,
		snapAlign: 'center',
	},
	992: {
		itemsToShow: 3,
		snapAlign: 'center',
	},
}
</script>
<style lang="scss" scoped>
.carousel__icon {
	fill: rgb(254, 254, 254);
}
.card {
	// padding: 1em;
	height: 22em;
	width: 15em;
	box-shadow: 0 0 1.5em #00d1b2;

	img {
		height: 92%;
		width: 100%;
		object-fit: cover;
	}
}
.carousel__slide {
	height: 25em;
}
</style>

<script setup>
import { useBandPhotos } from '../stores/bandPhotos'
const storeBandPhotos = useBandPhotos()
const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()
</script>
<template>
	<section class="section has-background-black is-fullheight">
		<div class="container">
			<div class="columns">
				<div class="column px-0">
					<img
						v-for="item in storeBandPhotos.galleryPhotos"
						:key="item"
						:src="item.src"
						alt="concert photo"
						class="img-box" />
				</div>
			</div>
		</div>
	</section>
</template>
<style lang="scss" scoped>
.columns {
	grid-auto-flow: row dense;
}
.img-box {
	padding: 0.5em;
	max-height: 30em;
	width: auto;
}
</style>

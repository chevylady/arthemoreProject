<template>
	<div class="container-bg is-flex is-justify-content-center">
		<img src="../assets/graphics/logo/ArthemoreSignWhite.png" alt="band sign name" class="px-1 mt-6" />
	</div>
</template>
<script setup>
const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()
</script>
<style lang="scss" scoped>
.container-bg {
	height: 100vh;
	width: 100%;
	background-image: url('/src/assets/graphics/opepage.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	img {
		height: 2.5em;
		width: auto;
	}
}
@media (min-width: 992px) {
	img {
		display: none;
	}
}
</style>

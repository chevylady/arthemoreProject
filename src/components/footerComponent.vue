<template>
	<footer class="footer is-fixed-bottom is-flex is-flex-direction-column is-align-items-center is-flex-wrap-wrap">
		<div class="line"></div>
		<p class="is-size-7 is-size-6-desktop pt-4 px-2 has-text-primary">
			{{ showYear }} Copyright &copy; | All Rights Reserved | Created by Gibek web
		</p>
	</footer>
</template>

<script setup>
const showYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
	padding: 0;
	height: 4em;
	width: 100%;
	background-image: url('@/assets/graphics/footer/czlowiek-footer-small.jpg');
	background-position: bottom;
	background-size: cover;
	p {
		font-family: 'Sawarabi Gothic', sans-serif;
	}
	.line {
		align-self: flex-start;
		height: 0.2em;
		width: 100%;
		background-color: cyan;
		box-shadow: 0 0 1em;
	}
}

@media (min-width: 992px){
	.footer {
	background-image: url('@/assets/graphics/footer/czlowiek-footer-big.jpg');
	}
}
</style>

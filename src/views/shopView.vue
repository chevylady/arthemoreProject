<template>
	<section
		class="section has-background-black pt-0"
		:class="{ 'stopScroll' : storeShop.modal }">
		<modalShopComponent v-if="storeShop.modal" class="showBag" />
		<div class="wrapper">
			<div class="btn-bag is-flex is-justify-content-end">
				<button @click="storeShop.modal = true" class="button is-small is-info">
					<i class="fa-solid fa-basket-shopping"></i>
					<p v-show="storeShoppingBag.itemsInBag.length > 0" class="is-size-6 ml-2">
						{{ storeShoppingBag.totalItems }}
					</p>
				</button>
			</div>
			<div class="shop-header is-flex is-justify-content-center is-align-items-center">
				<p class="title is-uppercase has-text-center has-text-primary pt-4 mt-4 mb-5">Gadżetownia</p>
			</div>
			<div class="shop is-flex is-justify-content-space-evenly is-align-items-space-evenly is-flex-wrap-wrap">
				<ProductCartComponent />
			</div>
		</div>
	</section>
</template>
<script setup>
import modalShopComponent from '../components/modalShopComponent.vue'
import ProductCartComponent from '../components/productCartComponent.vue'
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'

const storeShop = useShop()
const storeShoppingBag = useShoppingBag()
const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()
</script>

<style lang="scss" scoped>
	.stopScroll{
		position: fixed;
	}
.section {
	min-height: 100vh;
	width: 100%;
	.btn-bag {
		position: fixed;
		right: 0.1em;
	}
	
}
.showBag {
	animation: fade 0.5s forwards;
}
@keyframes fade {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@media (min-width: 1600px) {
	.wrapper {
		margin: 0 25%;
		min-height: 100%;
	}
}
</style>

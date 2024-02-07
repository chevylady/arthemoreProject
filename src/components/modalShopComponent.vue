<template>
	<div class="modal-wrapper py-3" aria-modal="true">
		<div
			class="orderBox mt-1 mx-auto is-flex is-flex-direction-column is-justify-content-flex-start is-align-items-center">
			<div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-4">
				<h1 class="title has-text-centered has-text-primary">Twoje zamówienie</h1>
				<div
					class="item-container py-1 px-2 is-flex is-flex-direction-row is-justify-content-space-evenly is-align-items-center is-flex-wrap-wrap"
					v-for="(item, index) in storeShoppingBag.itemsInBag"
					:key="index">
					<img :src="item.src" alt="product" class="item-img" />
					<div
						class="item-details my-2 mx-4 is-flex is-flex-direction-column is-justify-content-center is-align-items-start">
						<p class="is-size-6 is-capitalized">{{ index + 1 }}. {{ item.description }}</p>
						<p class="is-size-6">Size: {{ item.option }}</p>
						<p class="is-size-6">Ilość: {{ item.amount }}</p>
						<p class="is-size-6">Cena: {{ item.price * item.amount }} zł</p>
					</div>
					<div class="buttons mb-0">
						<button @click="storeShoppingBag.outOfBag(index)" class="button is-danger is-light is-small">
							<span class="icon is-small">
								<i class="fa-solid fa-xmark" style="color: #d20000"></i>
							</span>
						</button>
					</div>
					<div class="separate my-2 has-background-light"></div>
				</div>
				<div class="my-3 is-flex is-flex-direction-column is-justify-content-space-around is-align-items-start">
					<h2 class="is-size-6 has-text-primary">Podsumowanie:</h2>
					<p class="is-size-6">Ilość: {{ storeShoppingBag.totalItems }}</p>
					<p class="is-size-6 has-text-weight-bold">Do zapłaty: {{ storeShoppingBag.total }} zł</p>
					<p>Cena zawiera przesyłkę inPost: 16zł!</p>
				</div>
				<orderFormComponent />
				<div class="info-box mx-4 mb-5 pb-5">
					<p class="px-2 mb-2 pb-5 is-size-6">
						Po złożeniu zamówienia na Twój adres email zostaną wysłane informacje dotyczące płatności i wysyłki.
						Płatności automatyczne pojawią się w późniejszym terminie.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useShoppingBag } from '../stores/shoppingBag'
import orderFormComponent from './orderFormComponent.vue'
const storeShoppingBag = useShoppingBag()

const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()
</script>
<style lang="scss" scoped>
p,
h1,
h2,
label {
	color: lightgray;
	font-family: 'Sawarabi Gothic', sans-serif;
}
.incorrectData {
	border: 0.1em solid crimson;
}
.modal-wrapper {
	width: 100%;
	height: 100%;
	background-color: #000000da;
	z-index: 500;
	overflow-x: hidden;
	.orderBox {
		width: 20em;
		background-color: #070707e0;
		box-shadow: 0 0 1em cyan;
		border-radius: 0.3em;
		.item-container,
		.separate {
			width: 100%;
		}
		.item-container {
			.item-img {
				height: 6em;
				width: 6em;
				object-fit: cover;
			}
			.item-details {
				width: 14em;
			}
			.separate {
				height: 0.12em;
			}
		}
	}
}
@media (min-width: 992px) {
	.modal-wrapper .orderBox {
		width: 32em;
	}
}
</style>

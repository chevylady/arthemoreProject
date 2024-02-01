<template>
	<div class="section modal-wrapper pt-2" aria-modal="true">
		<div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
			<div class="is-flex is-flex-direction-column is-justify-content-center is-align-items-center mt-4">
				<h1 class="title has-text-centered has-text-black">Twoje zamówienie</h1>
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
					<h2 class="is-size-6 has-text-black">Podsumowanie:</h2>
					<p class="is-size-6">Ilość: {{ storeShoppingBag.totalItems }}</p>
					<p class="is-size-6 has-text-weight-bold">Do zapłaty: {{ storeShoppingBag.total }} zł</p>
					<p>koszt wysyłki: paczkomat InPost +15zł</p>
				</div>
			</div>

			<div class="form mt-4">
				<div class="field">
					<label class="label">Imię i nazwisko</label>
					<div class="control">
						<input v-model="nameData" class="input" type="text" placeholder="imię i nazwisko" />
					</div>
				</div>
				<div class="field">
					<label class="label">Numer telefonu</label>
					<div class="control">
						<input v-model="phoneNumber" class="input" type="text" placeholder="+48123456789" />
					</div>
				</div>
				<div class="field">
					<label class="label">Email</label>
					<div class="control">
						<input v-model="emailAddress" class="input is-danger" type="email" placeholder="Email@test.com" />
					</div>
					<p class="help is-danger">This email is invalid</p>
				</div>
				<inpostApiComponent />
			</div>
			<div class="mx-6 my-5 is-flex">
				<button @click="storeShop.modal = false" class="button is-small is-info is-light mx-1">Wróć</button>
				<button
					@click="
						storeShoppingBag.sendOrder(
							nameData,
							emailAddress,
							phoneNumber,
							storeShoppingBag.itemsInBag,
							storeShoppingBag.total
						)
					"
					class="button is-small is-success is-light mx-1">
					Wyślij
				</button>
				<button @click="clearForm(), (storeShop.modal = false)" class="button is-small is-danger is-light mx-1">
					Wyczyść
				</button>
			</div>
			<div class="info-box mx-4 mb-5 pb-5">
				<p class="px-5 pb-5 is-size-6">
					Po wysłaniu zamówienia poprzez formularz skontaktujemy się z Tobą. Otrzymasz wiadomość zwrotną z informacjami
					dotyczącymi płatności i wysyłki.
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'
import { ref } from 'vue'
import inpostApiComponent from './inpostApiComponent.vue'

const storeShop = useShop()
const storeShoppingBag = useShoppingBag()

const phoneNumber = ref(null)
const nameData = ref('')
const emailAddress = ref('')

const clearForm = () => {
	phoneNumber.value = null
	nameData.value = ''
	emailAddress.value = ''
}
</script>
<style lang="scss" scoped>
p,
h1,
h2,
label {
	color: black;
	font-family: 'Sawarabi Gothic', sans-serif;
}
.modal-wrapper {
	position: fixed;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: #100f0fdf;
	background-image: linear-gradient(90deg, #32323292 3%, #ffffffdb 60%);
	z-index: 500;
	overflow: auto;
	.item-container,
	.separate {
		width: 100%;
	}
	.item-container {
		height: auto;
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
</style>

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
					<p>Cena zawiera przesyłkę inPost!</p>
				</div>
			</div>

			<div class="form mt-4">
				<div class="field">
					<label class="label" for="name">Imię i nazwisko</label>
					<div class="control">
						<input
							v-model="formData.nameData"
							name="name"
							class="input"
							:class="{ incorrectData: v$.nameData.$error }"
							type="text"
							placeholder="imię i nazwisko" />
					</div>
				</div>
				<div class="field">
					<label class="label" for="phone">Numer telefonu</label>
					<div class="control">
						<input
							v-model="formData.phoneNumber"
							name="phoneNumber"
							class="input"
							:class="{ incorrectData: v$.phoneNumber.$error }"
							type="text"
							placeholder="123456789" />
					</div>
				</div>
				<div class="field">
					<label class="label" for="email">Email</label>
					<div class="control">
						<input
							v-model="formData.emailAddress"
							class="input"
							name="email"
							:class="{ incorrectData: v$.emailAddress.$error }"
							type="email"
							placeholder="Email@examp.com" />
					</div>
				</div>
				<inpostApiComponent @setMachine="setMachine" />
			</div>
			<div class="mx-6 my-5 is-flex">
				<button @click="storeShop.modal = false" class="button is-small is-info is-light mx-1">Wróć</button>
				<button @click="submitForm()" class="button is-small is-success is-light mx-1">Wyślij</button>
				<button @click="clearForm(), (storeShop.modal = false)" class="button is-small is-danger is-light mx-1">
					Wyczyść
				</button>
			</div>
			<div class="info-box mx-4 mb-5 pb-5">
				<p class="px-2 mb-2 pb-5 is-size-6">
					Po wysłaniu zamówienia na Twój email zostaną wysłane informacje dotyczące płatności i wysyłki.
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'
import inpostApiComponent from './inpostApiComponent.vue'
import { reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength } from '@vuelidate/validators'

const storeShop = useShop()
const storeShoppingBag = useShoppingBag()

function setMachine(machineBox) {
	formData.machineBoxChosen = machineBox
}

const formData = reactive({
	nameData: '',
	phoneNumber: null,
	emailAddress: '',
	machineBoxChosen: '',
})

const rules = computed(() => {
	return {
		nameData: { required, minLength: minLength(5) },
		phoneNumber: { required, numeric },
		emailAddress: { required, email },
		machineBoxChosen: { required },
	}
})
const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
	console.log(formData.machineBoxChosen)
	const result = await v$.value.$validate()
	if (result && formData.machineBoxChosen && !storeShoppingBag.itemsInBag) {
		storeShoppingBag.sendOrder(
			formData.nameData,
			formData.phoneNumber,
			formData.emailAddress,
			formData.machineBoxChosen,
			storeShoppingBag.itemsInBag,
			storeShoppingBag.total
		),
			alert('Wysłano!')
	} else {
		alert('Sprawdź swoje zamówienie')
	}
}

const clearForm = () => {
	formData.phoneNumber = null
	formData.nameData = ''
	formData.email = ''
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
.incorrectData {
	border: 0.1em solid crimson;
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

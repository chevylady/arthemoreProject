<template>
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
			<label class="label" for="phoneNumber">Numer telefonu</label>
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
	</div>
	<div class="inpostApi-wrapper py-1">
		<div class="field">
			<h3 class="has-text-black is-size-6 is-size-5-desktop my-2 has-text-primary">Wyszukaj swój paczkomat</h3>
			<label for="city" class="label has-text-black is-size-6 is-size-5-desktop has-text-light" name="city"
				>Miejscowość:</label
			>

			<div class="control is-flex is-align-items-center">
				<input v-model="typeCity" class="input" type="text" name="city" placeholder="szukaj w miejscowości" />
				<button class="button px-2" @click="getInPostLocations()">
					<img src="../assets/graphics/handy.png" alt="search icon" />
				</button>
			</div>
		</div>
		<div v-if="machineCity" class="field">
			<label for="details" class="label has-text-black is-size-6 is-size-5-desktop has-text-light" name="details"
				>Paczkomaty w miejscowości {{ machineCity }}:</label
			>
			<div class="select">
				<select v-model="formData.choosenMachine">
					<option value="" disabled>-wybierz paczkomat-</option>
					<option v-for="machineBox in machineName" :key="machineBox">
						{{ machineBox }}
					</option>
				</select>
			</div>
		</div>
	</div>
	<small v-if="formData.choosenMachine">Wybrany: {{ formData.choosenMachine }}</small>
	<div class="mx-6 my-5 is-flex">
		<button @click="storeShop.modal = false" class="button is-small is-info mx-1">Wróć</button>
		<button @click="submitForm()" class="button is-small is-primary mx-1">Wyślij</button>
		<button @click="clearForm()" class="button is-small is-danger mx-1">Wyczyść</button>
	</div>

	<!-- <inpost-geowidget
				@point="afterPointSelected(point)"
				token="token-for-geo"
				language="pl"
				config="parcelCollect"></inpost-geowidget> -->
</template>
<script setup>
import axios from 'axios'
import { reactive, computed, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength } from '@vuelidate/validators'
import { useShop } from '../stores/shop'
import { useShoppingBag } from '../stores/shoppingBag'

const storeShoppingBag = useShoppingBag()
const storeShop = useShop()

const typeCity = ref('')
const machineCity = ref('')
const machineName = ref([])
let machineLocations = ref([])

const getInPostLocations = () => {
	machineName.value = []
	axios
		.get('https://api-pl-points.easypack24.net/v1/points?fields=name,address_details&per_page=50000')
		.then(response => {
			machineLocations.value = response.data.items
			const array = [...machineLocations.value]

			for (let i = 0; i < array.length; i++) {
				if (typeCity.value.toLowerCase() === array[i].address_details.city.toLowerCase()) {
					machineName.value.push(
						`${array[i].name} ul. ${array[i].address_details.street} ${array[i].address_details.building_number}`
					)
					machineCity.value = array[i].address_details.city
				}
			}
		})
}

// function afterPointSelected(point) {
// 	alert('Selected point: ' + point.name)
// }

const formData = reactive({
	nameData: '',
	phoneNumber: null,
	emailAddress: '',
	choosenMachine: '',
})
const rules = computed(() => {
	return {
		nameData: { required, minLength: minLength(5) },
		phoneNumber: { required, numeric },
		emailAddress: { required, email },
		choosenMachine: { required },
	}
})
const v$ = useVuelidate(rules, formData)

const submitForm = async () => {
	console.log(formData.choosenMachine)
	const result = await v$.value.$validate()
	if (result && storeShoppingBag.itemsInBag.length > 0) {
		storeShoppingBag.sendOrder(
			formData.nameData,
			formData.phoneNumber,
			formData.emailAddress,
			formData.choosenMachine,
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
	formData.emailAddress = ''
	formData.choosenMachine = ''
	typeCity.value = ''
	machineCity.value = ''
}
</script>
<style lang="scss" scoped>
option,
select,
.field {
	width: 100%;
}
img {
	height: 1.6em;
	width: 1.6em;
}
inpost-geowidget{
	width: 60vw;
	height: 30vh;
}
</style>

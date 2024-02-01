<template>
	<div class="inpostApi-wrapper py-1">
		<div class="field">
			<h3 class="has-text-black is-size-6 is-size-5-desktop mb-2">Wyszukaj swój paczkomat</h3>
			<label for="city" class="label has-text-black is-size-6 is-size-5-desktop" name="city">Miejscowość:</label>
			<div class="control is-flex is-align-items-center">
				<input v-model="typeCity" class="input" type="text" name="city" placeholder="szukaj w miejscowości" />
				<button class="button" @click="getInPostLocations()"><img src="../assets/graphics/handy.png" alt="" /></button>
			</div>
		</div>
		<div v-if="machineCity" class="field">
			<label for="details" class="label has-text-black is-size-6 is-size-5-desktop" name="details"
				>Paczkomaty w miejscowości {{ machineCity }}:</label
			>
			<div class="select is-primary">
				<select v-model="choosenMachine">
					<option value="">-wybierz paczkomat-</option>
					<option v-for="machineBox in machineName" :key="machineBox">{{ machineBox }}</option>
				</select>
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref } from 'vue'
import axios from 'axios'

const choosenMachine = ref('')
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
</script>
<style lang="scss" scoped>
option {
	width: 100%;
}
img {
	height: 1.5em;
	width: auto;
}
</style>

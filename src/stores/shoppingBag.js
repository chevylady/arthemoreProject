import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

const ordersCollectionRef = collection(db, 'orders')

export const useShoppingBag = defineStore('shoppingBag', {
	state: () => {
		return {
			itemsInBag: [],
		}
	},
	getters: {
		total: state => {
			let sum = 0
			let deliveryPrice = 16
			state.itemsInBag.forEach(item => {
				sum += item.price * item.amount + deliveryPrice
			})
			return sum
		},
		totalItems: state => {
			let quantity = 0
			state.itemsInBag.forEach(item => {
				quantity += item.amount
			})
			return quantity
		},
	},
	actions: {
		pushToBag(product) {
			this.itemsInBag.push(product)
		},
		outOfBag(indexToDelete) {
			this.itemsInBag = this.itemsInBag.filter(item => this.itemsInBag.indexOf(item) !== indexToDelete)
		},
		async sendOrder(nameData, phoneNumber, emailAddress,machineBoxChosen, itemsInBag, total) {
			let dateOfOrder = Date()
			let id = dateOfOrder.toString()

			await setDoc(doc(ordersCollectionRef, id), {
				Imię: nameData,
				Email: emailAddress,
				Telefon: phoneNumber,
				Paczkomat: machineBoxChosen,
				Produkt: itemsInBag,
				sumaZŁ: total,
			})
		},
	},
})

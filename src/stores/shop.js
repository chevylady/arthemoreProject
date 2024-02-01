import { defineStore } from 'pinia'
import { useShoppingBag } from './shoppingBag'

export const useShop = defineStore('shop', {
	state: () => {
		return {
			
			modal: false,
			shopItems: [
				{
					src: '/images/shop/shirt-man-czlowiek.jpg',
					description: 'koszulka męska "Człowiek"',
					price: 40,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 1
					
				},
				{
					src: '/images/shop/shirt-w-czlowiek.jpg',
					description: 'koszulka damska "Człowiek"',
					price: 35,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 2
				
				},
				{
					src: '/images/shop/shirt-man-black.jpg',
					description: 'koszulka męska LOGO',
					price: 40,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 3
				
				},
				{
					src: '/images/shop/shirt-man-black2.jpg',
					description: 'koszulka męska LOGO',
					price: 40,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 4
				
				},
				{
					src: '/images/shop/shirt-man-grey.jpg',
					description: 'koszulka męska LOGO szara',
					price: 40,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 5
				
				},
				{
					src: '/images/shop/shirt-man-grey2.jpg',
					description: 'koszulka męska LOGO szara',
					price: 40,
					amount: 0,
					option: 'S',
					textile: '90% cotton 10% polyester',
					id: 6
				
				},

				{
					src: '/images/shop/cap.jpg',
					description: 'czapka z daszkiem LOGO',
					nosize: 1,
					price: 30,
					amount: 0,
					option: 'one size',
					textile: '100% polyester',
					id: 7
				},
				{
					src: '/images/shop/cap2.jpg',
					description: 'czapka z daszkiem LOGO',
					nosize: 1,
					price: 30,
					amount: 0,
					option: 'one size',
					textile: '100% polyester',
					id: 8
					
				},
			],
		}
	},

	actions: {
		increaseAmount(index) {
			this.shopItems[index].amount++
		},
		decreasAmount(index) {
			this.shopItems[index].amount--
		},
		addToBag(index) {
			const storeShoppingBag = useShoppingBag()
			let shopObject = this.shopItems[index]
			let newShopObject = { ...shopObject }

			storeShoppingBag.pushToBag(newShopObject)
			this.shopItems[index].amount = 0
		},
	},
})

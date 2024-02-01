import { defineStore } from 'pinia'

export const useBandPhotos = defineStore('bandPhotos', {
	state: () => {
		return {
			bandPhotos: [
				{
					src: '/images/photos/SebaWojtowicz.jpg',
					description: 'Sebastian Wójtowicz - gitarzysta',
				},
				{
					src: '/images/photos/OlaPiasecka.jpg',
					description: 'Ola Piasecka - wokalistka',
				},
				{
					src: '/images/photos/KarolBobek.jpg',
					description: 'Karol Bobek - basista',
				},
				{
					src: '/images/photos/BartekBurkat.jpg',
					description: 'Bartek Burkat - gitarzysta',
				},
				{
					src: '/images/photos/MaciekGlodek2.jpg',
					description: 'Maciek Głodek - perkusista',
				},
			],

			galleryPhotos: [
				{
					src: '/images/gallery/8.jpg',
				},
				{
					src: '/images/gallery/7.jpg',
				},
				{
					src: '/images/gallery/6.jpg',
				},
				{
					src: '/images/gallery/5.jpg',
				},
				{
					src: '/images/gallery/4.jpg',
				},
				{
					src: '/images/gallery/3.jpg',
				},
				{
					src: '/images/gallery/2.jpg',
				},
				{
					src: '/images/gallery/1.jpg',
				},
			],

		}
	},
})

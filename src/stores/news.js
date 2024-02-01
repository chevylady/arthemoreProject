import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, onSnapshot } from 'firebase/firestore'
const newsCollectionRef = collection(db, 'news')

export const useNews = defineStore('news', {
	state: () => {
		return {
			latestNews: [
				// {
				// 	src: '/images/news/gwarek2023.jpg',
				// 	title: 'Zakończenie trasy Women Metal Show 2023',
				// 	description:
				// 		'W krakowskim klubie Gwarek odbył się ostatni koncert z serii Women Metal Show Tour 2023. Dziękujemy, że byliście z nami i do zobaczenia na kolejnych trasach!',
				// },
				// {
				// 	src: '/images/news/calendar.jpg',
				// 	title: 'Nadchodzące koncerty',
				// 	description: 'Bilety na najbliższe koncerty możecie kupić w serwisach: www.babajaga.com',
				// },
				// {
				// 	src: '/images/news/shop.jpg',
				// 	title: 'Mijający rok',
				// 	description:
				// 		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat blanditiis, veniam laborum hic maxime, deleniti aliquam distinctio in suscipit omnis eligendi ipsa temporibus fugit. Maiores officiis labore hic laudantium.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam placeat blanditiis, veniam laborum hic maxime, deleniti aliquam distinctio in suscipit omnis eligendi ipsa temporibus fugit. Maiores officiis labore hic laudantium.',
				// },
			],
		}
	},
	actions: {
		async showNews() {
			onSnapshot(newsCollectionRef, querySnapshot => {
				querySnapshot.forEach(doc => {
					let news = {
						id: doc.id,
						title: doc.data().title,
						src: doc.data().src,
						description: doc.data().description,
					}
					this.latestNews.push(news)
				})
			})
		},
	},
})

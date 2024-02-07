import { defineStore } from 'pinia'
import { db } from '../js/firebase'
import { collection, getDocs } from 'firebase/firestore'
const newsCollectionRef = collection(db, 'news')

export const useNews = defineStore('news', {
	state: () => {
		return {
			latestNews: [],
		}
	},
	actions: {
		async showNews() {
			const querySnapshot = await getDocs(newsCollectionRef)
			querySnapshot.forEach(doc => {
				let news = {
					id: doc.id,
					title: doc.data().title,
					src: doc.data().src,
					description: doc.data().description,
				}
				const existingNewsIndex = this.latestNews.findIndex(item => item.id === news.id)
				if (existingNewsIndex === -1) {
					this.latestNews.push(news)
				} else {
					this.latestNews[existingNewsIndex] = news
				}
			})
		},
	},
})

import { defineStore } from 'pinia'

export const useDiscography = defineStore('discography', {
	state: () => {
		return {
			isPlaying: false,
			albums: [
				{
					title: '"Człowiek" 2022',
					src: '/images/musicalbums/czlowiek.jpg',
					soundPath: '../assets/sound/ZbytWielka.mp4',
					tracks: [
						'1. Intro',
						'2. Zbyt wielka',
						'3. Prosta droga do nikąd',
						'4. Jestem zerem',
						'5. Psychoza',
						'6. Sądny dzień',
						'7. Śmiertelnik',
						'8. Naiwna',
						'9. Marzenie',
					],
					description: [
						'Barbara Tylek - Wokal',
						'Sebastian Wójtowicz - Gitara rytmiczna',
						'Bartłomiej Burkat - Gitara solowa',
						'Waldemar Kowalski - Perkusja',
						'Karol Bobek - Bass',
					],
				},

				{
					title: '"Zmowa Milczenia" 2016',
					src: '/images/musicalbums/zmowamilczenia.jpg',
					soundPath: '../assets/sound/ZmowaMilczenia.mp3',
					tracks: [
						'1. Raj Utracony (intro)',
						'2. Sól Ziemi Naszej',
						'3. Zmowa Milczenia',
						'4. Sen',
						'5. Ocean',
						'6. Nalot',
						'7. Tyran',
						'8. Nadzieja',
						'9. Cisza',
						'10. Życie',
						'11. Zmowa Milczenia (bonus track)'
					],
					description: [
						'Barbara Tylek - Wokal',
						'Sebastian Wójtowicz - Gitara rytmiczna',
						'Waldemar Kowalski - Perkusja',
						'Karol Bobek - Bass',
						'Piotr Łapcik- Gitara solowa',
						'Gościnnie wystąpili też Piotr (VX) Kopeć - THY DISEASE oraz Michał (Sudi ) Suder i Rafał ( Długi) Bubak - DEALER.'
					],
				},
				{
					title: '"Zadośćuczynienie" 2012',
					src: '/images/musicalbums/zadoscuczynienie.jpg',
					soundPath: '../assets/sound/OddałabymWszystko.mp3',
					tracks: [
						'1. Zadośćuczynienie',
						'2. Niechybnie Zgotowane Piekło',
						'3. Jestem',
						'4. Oddałabym Wszystko',
						'5. Marsz Wilków (TSA Cover)',
						'6. Odnaleźć Jego Ślad',
						'7. Czasu Kres',
						'8. Niczego Więcej',
						'9. Nie Wiem',
						'10. Hamargarren (instrumental)',
					],
					description: [
						'Barbara Tylek - Wokal',
						'Sebastian Wójtowicz - Gitara rytmiczna',
						'Piotr Łapcik- Gitara solowa',
						'Waldemar Kowalski - Perkusja',
						'Karol Bobek - Bass',
					],
				},
			],
		}
	},
})

<script setup>
import { ref, onMounted } from 'vue'
const showCookie = ref(true)
const showInfo = ref(false)

onMounted(() => {
	const nav = document.querySelector('.navbar')
	if (!showCookie.value) {
		nav.classList.remove('ignore-click')
	}
})
const acceptAllCookies = () => {
	const nav = document.querySelector('.navbar')
	const sameSiteFlag = 'SameSite=Strict;'
	const secureFlag = location.protocol === 'https:' ? 'Secure;' : ''
	localStorage.setItem('cookiesAccepted', 'true')
	document.cookie = `acceptCookies=true; expires=Fri, 31 Dec 2024 23:59:59 GMT; path=/; ${secureFlag} ${sameSiteFlag}''`
	showCookie.value = false
	nav.classList.remove('ignore-click')
}
const checkCookies = () => {
	const cookiesAccepted = localStorage.getItem('cookiesAccepted')
	if (cookiesAccepted) {
		showCookie.value = false
	}
}
checkCookies()
</script>
<template>
	<template v-if="showCookie">
		<div class="cookieWrapper">
			<h2 class="my-2 mx-2 px-3 is-size-6 is-size-5-desktop">
				Ta strona używa plików cookies! Wykorzystujemy zewnętrzne serwisy, które mogą przechowywać dane.
			</h2>
			<div class="options is-flex is-flex-wrap-wrap">
				<button @click="acceptAllCookies" class="button is-success is-light my-2 mx-3">OK, rozumiem!</button>
				<button @click="showInfo = !showInfo" class="button is-info is-light my-2 mx-3">Więcej info</button>
			</div>
			<template v-if="showInfo">
				<p class="mx-2 px-3 is-size-6 is-size-5-desktop">
					Nasza strona korzysta z serwisów społecznościowych jak YouTube, Spotify, Facebook, LastFM, Instagram, które
					mogą korzystać z plików cookies. Możesz zmienić ustawienia w przeglądrce.
				</p>
			</template>
		</div>
	</template>
</template>
<style lang="scss">
.cookieWrapper {
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50%;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.844);
	color: lightgray;
	z-index: 100;
	.button {
		width: 8em;
	}
}
.ignore-click {
	pointer-events: none;
}
</style>

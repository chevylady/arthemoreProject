<template>
	<nav class="navbar is-fixed-top ignore-click" role="navigation" aria-label="main navigation">
		<div class="navbar-brand my-2 px-2">
			<router-link to="/home" class="is-hidden-desktop"
				><img class="image is-64x64" src="../assets/graphics/logo/logoBlue.png" alt="logo brand" />
			</router-link>
			<a
				role="button"
				@click="toggleMenu()"
				class="navbar-burger my-auto mr-3"
				:class="{ showMobileNav: 'is-active' }"
				aria-label="menu"
				aria-expanded="false">
				<span class="tag is-black is-size-6 is-rounded has-background-primary"></span>
				<span class="tag is-black is-size-6 is-rounded has-background-primary"></span>
				<span class="tag is-black is-size-6 is-rounded has-background-primary"></span>
			</a>
		</div>

		<div
			@click="toggleMenu()"
			class="navbar-menu is-align-items-center is-size-5 is-uppercase"
			:class="showMobileNav ? 'is-active' : ''">
			<router-link to="/home" class="arthemoreSign mr-2 is-hidden-touch"
				><img class="arthemoreSign" src="../assets/graphics/logo/ArthemoreSignWhite.png" alt="sign brand" />
			</router-link>
			<router-link
				to="/home"
				@click="showMeLink($event)"
				class="navbar-item has-text-light"
				:class="linkIsActive === 'Strona główna' ? 'active' : ''"
				>Strona główna</router-link
			>
			<router-link
				to="/aboutPage"
				@click="showMeLink($event)"
				class="navbar-item has-text-light"
				:class="linkIsActive === 'zespół' ? 'active' : ''"
				>Zespół</router-link
			>
			<router-link
				to="/discography"
				@click="showMeLink($event)"
				:class="linkIsActive === 'dyskografia' ? 'active' : ''"
				class="navbar-item has-text-light"
				>Dyskografia</router-link
			>
			<router-link
				to="/gallery"
				@click="showMeLink($event)"
				:class="linkIsActive === 'galeria' ? 'active' : ''"
				class="navbar-item has-text-light"
				>Galeria</router-link
			>
			<router-link
				to="/shop"
				@click="showMeLink($event)"
				:class="linkIsActive === 'gadżetownia' ? 'active' : ''"
				class="navbar-item has-text-light"
				>Gadżety</router-link
			>
		</div>
	</nav>
</template>
<script setup>
import { ref } from 'vue'
const showMobileNav = ref(false)

const linkIsActive = ref('')

const toggleMenu = () => {
	showMobileNav.value = !showMobileNav.value
}

const showMeLink = e => {
	linkIsActive.value = e.target.textContent

	console.log(linkIsActive.value)
}
</script>
<style lang="scss" scoped>
.navbar {
	background-image: url('@/assets/graphics/navigation/czlowiek-nav-small.jpg');
	background-position: top;
	background-size: cover;
	font-family: 'Raleway', 'Sawarabi Gothic', sans-serif;
	font-weight: bold;
	text-shadow: 1px 1px 2px black, 0 0 1em black;
	.navbar-item {
		padding-right: 1.2em;
		transition: color 0.3s;
		&:hover {
			color: #00d1b2 !important;
		}
	}
	&.is-fixed-top {
		height: 5em;
	}
	.navbar-burger {
		span {
			width: 2em;
			height: 0.2em;
		}
	}
	.arthemoreSign {
		height: auto;
		max-height: 3em;
		width: auto;
		min-width: 12em;
	}
}
a.has-text-info-dark {
	transition: color 0.3s;
	&:hover,
	&:focus {
		color: rgb(0, 164, 164) !important;
	}
}
@media (max-width: 1023px) {
	.navbar-menu {
		display: block;
		transform: translateX(110%);
		opacity: 0;
		text-align: right;
		background-color: rgba(0, 0, 0, 0.9);
		transition: transform 0.4s, opacity 0.6s;
		&.is-active {
			transform: translateX(0);
			opacity: 1;
			margin-right: 0 !important;
		}
	}
}
@media (min-width: 768px) {
	.navbar div.navbar-brand {
		margin: 0 3em;
	}
}
@media (min-width: 992px) {
	.navbar {
		background-image: url('@/assets/graphics/navigation/czlowiek-nav-big.jpg');
	}
}
@media screen and (min-width: 1024px) {
	.navbar-menu {
		justify-content: space-around;
		margin: 0 2em;
		flex-shrink: 1;
	}
	.navbar-brand {
		display: none;
	}
}
@media (min-width: 1400px) {
	.navbar-menu {
		justify-content: center;
		gap: 2em;
	}
}
</style>

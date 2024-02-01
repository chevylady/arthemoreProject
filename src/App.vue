<script setup>
import { RouterView } from 'vue-router'
import navComponents from './components/navComponents.vue'
import footerComponent from './components/footerComponent.vue'
import cookieComponent from './components/cookieComponent.vue'
</script>
<template>
	<cookieComponent />
	<navComponents />
	<div class="pageContent">
		<router-view />
	</div>
	<footerComponent />
</template>
<style>
@import 'bulma/css/bulma.css';
/* @import 'bulma/css/mystyle.css'; */

#app {
	min-height: 100vh;
}
.pageContent {
	margin-top: 5em;
	width: 100%;
	scroll-behavior: smooth;
	background-color: black;
}
html {
	scrollbar-color: #00d1b2 black;
}
.ignore-click {
	pointer-events: none;
}
</style>

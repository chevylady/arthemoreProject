<template>
	<div class="mediaBar is-flex is-justify-content-center is-align-items-center">
		<mediaComponent />
	</div>
	<section class="hero-img"></section>
	<section class="section newsBox py-5 has-background-black">
		<p class="title has-text-centered has-text-light">NEWS</p>
		<div
			v-for="news in storeNews.latestNews"
			:key="news"
			class="news-wrapper is-flex-direction-column is-justify-content-center">
			<h2 class="px-2 is-size-4 has-text-primary">{{ news.title }}</h2>
				<div class="singleNews my-3 py-2 px-3">
				<img :src="news.src" alt="photo news" />
				<div class="news_txt mx-2">
					<p class="mt-2 py-1 px-3 is-size-6 is-size-5-desktop has-text-light">{{ news.description }}</p>
					<small class="ml-3">{{ news.id }}</small>
				</div>
			</div>
			<div class="line my-3"></div>
		</div>
	</section>
</template>

<script setup>
import mediaComponent from '../components/mediaComponent.vue'
import { onMounted} from 'vue'
import { useNews } from '../stores/news'
const storeNews = useNews()

const scrollToTop = () => {
	window.scrollTo(0, 0)
}
scrollToTop()

onMounted(()=>{
	storeNews.showNews()
})


</script>

<style lang="scss" scoped>
.hero-img,
.newsBox,
.line {
	width: 100%;
}
.hero-img {
	height: 14em;
	background-image: url('../assets/graphics/main-img-small.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.newsBox {
	height: 100%;
	.news-wrapper, img{
		height: auto;
		width: auto;
	}
	.news-wrapper {	
		.singleNews {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			img {			
				max-height: 16em;				
			}
		}
		.line {
			height: 0.1em;
			box-shadow: 0 0 3px cyan;
		}
	}
}
.mediaBar {
	margin-top: 1em;
	height: 5em;
	background-color: black;
}

@media (min-width: 768px) {
	.hero-img {
		height: 30em;
		background-image: url('../assets/graphics/main-img-desktop.jpg');
	}
	.newsBox {
		h2 {
			text-align: left;
		}
		.news-wrapper .singleNews {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			.news_txt {
			align-self: flex-start;
			}
			img {
				height: 18em;
			}
		}
	}
}
@media (min-width: 992px) {
	.newsBox .news-wrapper .singleNews {
		justify-content: space-between;
		img {
			height: 25em;
		}
		.news_txt {
			width: 50vw;
		}
	}
}
@media (min-width:1400px) {
.newsBox .news-wrapper{
	width: 70%;
	margin: 0 auto;
}
}
</style>

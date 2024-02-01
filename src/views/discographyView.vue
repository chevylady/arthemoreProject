<template>
	<section class="section has-background-black pt-4">
		<div class="discography" v-for="(album, index) in storeDiscography.albums" :key="index">
			<p class="title has-text-primary">{{ album.title }}</p>
			<div
				class="album-wrapper is-flex is-justify-content-space-around is-align-content-space-around is-flex-wrap-wrap">
				<div class="img-box mt-3 mx-1 py-1 px-1">
					<img :src="album.src" alt="album cd" />
				</div>
				<div class="album-tracklist mx-2 my-2">
					<p class="is-size-5 is-uppercase has-text-primary">Tracklist</p>
					<ul v-for="track in album.tracks" :key="track" class="is-flex">
						<li class="is-size-5-desktop has-text-grey">{{ track }}</li>
					</ul>
				</div>
				<div class="album-description mx-2 my-2">
					<p class="is-size-5 is-uppercase has-text-primary">Band</p>
					<ul v-for="item in album.description" :key="item" class="is-flex">
						<li class="is-size-5-desktop has-text-grey">{{ item }}</li>
					</ul>
				</div>
			</div>
			<div class="line my-3"></div>
		</div>
	</section>
	<section class="section media py-2 has-background-black is-flex is-flex-direction-row is-flex-wrap-wrap">
		<div class="yt-wrapper mb-3">
			<div class="player">
				<VueYtframe video-id="i0HSy0XIe9Y" :player-vars="{ autoplay: 0}" />
			</div>
		</div>
		<div class="yt-wrapper mb-3">
			<div class="player">
				<VueYtframe video-id="RwmjQn2fXGs" :player-vars="{ autoplay: 0}" />
			</div>
		</div>
	</section>
</template>
<script setup>
import { useDiscography } from '../stores/discography'
const storeDiscography = useDiscography()

const scrollToTop = () =>{
	window.scrollTo(0, 0)
}
scrollToTop()
</script>

<style lang="scss" scoped>
.album-wrapper {
	box-shadow: 0 0 1em;
	border-radius: 0.5em;
	overflow: hidden;
	.img-box {
		align-self: center;
		img {
			height: 12em;
			width: 12em;
		}
	}
	.album-tracklist,
	.album-description {
		width: 60%;
	}
}
.yt-wrapper {
	margin: 0 auto;
	height: 20em;
	width: 35em;
	.player {
		height: 100%;
		max-width: 100%;
	}
}
.line {
	height: 0.1em;
	width: 100%;
	box-shadow: 0 0 3px cyan;
}

@media (min-width: 992px) {
	.yt-wrapper {
		height: 25em;
		width: 35em;
	}
	.album-wrapper{
		.album-tracklist,
		.album-description {
			width: 25%;
		}
	}
}
@media (min-width: 1600px){
	.discography{
		margin: 0 auto;
		max-width: 70%;
	}
	.media{
		height: 30em;
	}
}
</style>

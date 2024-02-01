<template>
	<div
		v-for="(item, index) in storeShop.shopItems"
		:key="index"
		class="item-box is-flex is-flex-direction-column is-justify-content-space-evenly is-align-items-center">
		<div class="item-name py-3">
			<p class="has-text-light">{{ item.description }} - {{ item.price }} zł</p>
		</div>
		<div class="img-box">
			<button class="btn-info has-text-weight-bold is-flex is-flex-direction-column is-justify-content-center is-align-items-center"><i class="fa-regular fa-circle-question" style="color: #000000;"></i></button>
			<img :src="item.src" alt="zdjęcie produktu odzież" />
            <div class="info is-flex is-flex-direction-column is-justify-content-center is-align-items-center"><p class="px-3 has-text-weight-bold">Materiał: {{ item.textile }}</p></div>
		</div>
		<div class="is-flex is-justify-content-space-evenly is-align-items-center my-2">
			<button v-if="!item.amount" @click="storeShop.increaseAmount(index)" class="button is-info">wybieram</button>
			<template v-if="item.amount">
				<button @click="storeShop.increaseAmount(index)" class="addItem button is-success mx-2">
					<span class="is-size-5">+</span>
				</button>
				<p class="my-auto is-size-4 has-text-light">{{ item.amount }}</p>
				<button
					@click="storeShop.decreasAmount(index)"
					class="button is-dark mx-2 is-align-items-center"
					:disabled="item.amount < 1">
					<span class="is-size-4">-</span>
				</button>
				<button @click.stop="storeShop.addToBag(index)" class="button is-info mx-2" :disabled="item.amount < 1">
					<i class="fa-solid fa-basket-shopping"></i>
				</button>
				<template v-if="item.amount >= 1">
					<template v-if="!item.nosize">
						<div class="field is-flex is-align-items-center">
							<div class="control">
								<div class="select is-flex is-align-items-center ml-2">
									<select
										v-model="storeShop.shopItems[index].option"
										class="is-flex is-align-items-center py-1 has-background-grey-light">
										<option :value="'S'"><span class="is-size-6">S</span></option>
										<option :value="'M'"><span class="is-size-6">M</span></option>
										<option :value="'L'"><span class="is-size-6">L</span></option>
									</select>
								</div>
							</div>
						</div>
					</template>
				</template>
			</template>
		</div>
	</div>
</template>
<script setup>

import { useShop } from '../stores/shop'
const storeShop = useShop()
</script>

<style lang="scss" scoped>
.shop {
	.item-box {
		margin: 0.5em;
		height: 25em;
		width: 20em;

		.img-box {
			position: relative;
			height: 18em;
			width: 13em;
			.btn-info {
				position: absolute;
                top: .1em;
                right: .1em;
				width: 2em;
				height: 2em;
				border-radius: 50%;
				font-size: 1em;
				background-color: rgba(255, 255, 255, 0.6);
				z-index: 10;
				transition: all 0.3s;
				cursor: pointer;
                &:hover~div.info{
                    clip-path: circle(100% at 50% 80%);
                }
				i{
					font-size: 1.3rem;
				}
			}
            .info{
                position: absolute;
                top: 0;
                bottom: 0;
                background-color: rgba(255, 255, 255, 0.448);
                color: black;
                clip-path: circle(0 at 50% 80%);
                transition: clip-path .3s;
            }

			img {
				height: 100%;
				width: 100%;
			}
			.button {
				height: 100%;
				font-size: 1em;
			}
		}
		.select {
			height: 100%;
			width: auto;
		}
	}
}
</style>

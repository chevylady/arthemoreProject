import { createRouter, createWebHashHistory } from 'vue-router'
import aboutPageView from '@/views/aboutPageView.vue'
import homePageView from '@/views/homePageView.vue'
import galleryView from '@/views/galleryView.vue'
import discographyView from '@/views/discographyView.vue'
import shopView from '@/views/shopView.vue'
import openPageView from '@/views/openPageView.vue'

const routes = [
    {
      path: '/',
      name: 'openPage',
      component: openPageView
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePageView
    },
    {
      path: '/aboutPage',
      name: 'aboutPage',
      component: aboutPageView
    },
	{
		path: '/gallery',
		name: 'gallery',
		component: galleryView
	},
	{
		path: '/discography',
		name: 'dyskografia',
		component: discographyView
	},
	{
		path: '/shop',
		name: 'sklep',
		component: shopView
	}
  ]


const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router

// component: () => import('../views/AboutView.vue')
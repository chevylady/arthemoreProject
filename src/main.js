import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import VueYtframe from "vue3-ytframe"

const app = createApp(App)

app.use(createPinia()).use(router).use(VueYtframe).mount('#app')

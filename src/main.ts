import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './index.css'
import i18 from "./locales/i18"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18)
app.mount('#app')
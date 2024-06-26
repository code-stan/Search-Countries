import { createApp } from 'vue'
import './sass/style.scss'
import App from './App.vue'
import { router } from './router'

const app = createApp(App).use(router)
app.mount('#app')

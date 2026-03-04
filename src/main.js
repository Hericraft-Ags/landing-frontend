import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'
import i18n, { loadedMessages } from './i18n'
console.log('i18n messages en main:', JSON.stringify(loadedMessages).slice(0, 200))

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1000,
  once: true
})

const app = createApp(App)
app.use(router)
app.mount('#app')
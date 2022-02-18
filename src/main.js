import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/css/main.css'
import axios from 'axios'

const app=createApp(App)
app.config.globalProperties.$http=axios
app.use(store).use(router).mount('#app')

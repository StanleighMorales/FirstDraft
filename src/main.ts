import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './routers'

const app = createApp(App)

app.use(router)
app.mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import roteador from './roteador'

createApp(App)
    .use(roteador)
    .mount('#app')

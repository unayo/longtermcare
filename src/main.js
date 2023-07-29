import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import VueKinesis from "vue-kinesis";

import App from './App.vue'
import router from './router'

// component
import Menu from './components/Global/Menu.vue'
import Footer from './components/Global/Footer.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(VueKinesis)

app.component('Menu', Menu)
app.component('Footer', Footer)

app.mount('#app')

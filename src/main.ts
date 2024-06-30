import './assets/main.css'
import 'devextreme/dist/css/dx.light.css';
//import 'vue3-date-time-picker';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

//import Datepicker from 'vue3-date-time-picker';
//import 'vue3-date-time-picker/dist/main.css';

const app = createApp(App)
const pinia=createPinia();
pinia.use(piniaPluginPersistedstate)
//app.component('Datepicker', Datepicker);
app.use(pinia)
app.use(router)
app.mount('#app')

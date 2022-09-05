import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import '../public/global.css'
import VueSmoothScroll from 'vue3-smooth-scroll'

/* @router */
import router from './router/index'

/* @store */
import store from './store'

/* @primevue */
//primeVue Config
import PrimeVue from 'primevue/config'
//primevue themes
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

/* @vueToast */
import VueToast from 'vue-toast-notification'
//vuetoast theme
import 'vue-toast-notification/dist/theme-sugar.css'

/* @layouts */
import AppLayout from './layouts/AppLayout.vue'

createApp(App)
    .use(router)
    .use(store)
    .use(VueToast)
    .use(PrimeVue)
    .use(VueSmoothScroll)
    .component('AppLayout', AppLayout)
    .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/bs.css'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router';
import axios from 'axios';

const options = {
    confirmButtonColor: '#ffe0b2'
};

const app = createApp(App)
// app.use(axios);
// app.provide('$axios', axios);
app.config.globalProperties.$axios = axios;
app.use(VueSweetalert2, options);
app.use(router);
app.mount('#app');

// createApp({})
//     .use(VueSweetalert2, options)
//     .use(router)
//     .mount('#app')

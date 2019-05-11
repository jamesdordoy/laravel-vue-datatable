import Vue from 'vue';
import App from './App.vue';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from './plugin.js';
Vue.use(DataTable);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');

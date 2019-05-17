import Vue from 'vue';
import App from './App.vue';

import moment from 'moment'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DataTable from './plugin.js';
Vue.use(DataTable);

Vue.config.productionTip = false;

Vue.filter('formatDate', function(value, format='Do MMMM YYYY') {
    if (value) {
        return moment(String(value)).format(format)
    }
    return 'N/A'
});

new Vue({
    render: h => h(App)
}).$mount('#app');

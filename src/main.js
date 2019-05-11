// import DataTable from "./components/DataTable.vue";


// import Paginator from 'laravel-vue-pagination';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import Vue from 'vue'
import App from './App.vue'

Vue.component('laravel-pagination', require('laravel-vue-pagination'));

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')



// export default {
//     install(Vue) {
//         Vue.component("data-table", DataTable);
//         Vue.component("paginator", Paginator);
//     }
// };
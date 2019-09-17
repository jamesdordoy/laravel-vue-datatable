//Imports
import 'bootstrap';
import Vue from 'vue';
import moment from 'moment'
import App from './App.vue';
import routes from './routes.js';
import VueRouter from 'vue-router';
import DataTable from './plugin.js';
import 'highlight.js/styles/github.css';
import VueHighlightJS from 'vue-highlightjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

//Plugin Useage
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueHighlightJS);

//Font Awesome
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle, faTable, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';

library.add(faVuejs, faPhp, faLaravel, faTable, faProjectDiagram, faInfoCircle, faEye );
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Filters
Vue.filter('formatDate', function(value, format='Do MMMM YYYY') {
    if (value) {
        return moment(String(value)).format(format)
    }
    return 'N/A'
});

//Router
const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

//Turn off production tips
Vue.config.productionTip = false;

//App Instance
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

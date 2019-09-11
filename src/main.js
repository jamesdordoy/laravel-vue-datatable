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

Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueHighlightJS)

Vue.config.productionTip = false;

import { library } from '@fortawesome/fontawesome-svg-core'
import { faVuejs, faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faVuejs, faPhp )

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.filter('formatDate', function(value, format='Do MMMM YYYY') {
    if (value) {
        return moment(String(value)).format(format)
    }
    return 'N/A'
});

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
  });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

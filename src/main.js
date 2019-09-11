
import 'bootstrap';
import Vue from 'vue';
import moment from 'moment'
import App from './App.vue';
import VueRouter from 'vue-router';
import DataTable from './plugin.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes.js';

import 'highlight.js/styles/github.css'
import VueHighlightJS from 'vue-highlightjs'


Vue.use(DataTable);

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.use(VueHighlightJS)

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

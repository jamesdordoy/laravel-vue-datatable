//Imports
import 'bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment'
import App from './App.vue';
import routes from './routes.js';
import VueRouter from 'vue-router';
import DataTable from './plugin';
import 'highlight.js/styles/github.css';
import VueHighlightJS from 'vue-highlightjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import createPersistedState from 'vuex-persistedstate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueSweetalert2 from 'vue-sweetalert2';

import './assets/styles/main.css';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

//Plugin Useage
Vue.use(Vuex);
Vue.use(DataTable);
Vue.use(VueRouter);
Vue.use(VueHighlightJS);

//Font Awesome
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faInfoCircle, faTable, faProjectDiagram, faRestroom, faHammer, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';
import { faVuejs, faPhp, faLaravel, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
    faBars,
    faEllipsisV,
    faVuejs,
    faPhp,
    faGithub,
    faLaravel,
    faTable,
    faProjectDiagram,
    faInfoCircle,
    faEye,
    faRestroom,
    faHammer
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

//Filters
Vue.filter('formatDate', function(value, format='Do MMMM YYYY') {
    if (value) {
        return moment(String(value)).format(format)
    }
    return 'N/A'
});

//Filters
Vue.filter('padDigit', function(num, padlen, padchar) {
    var pad_char = typeof padchar !== 'undefined' ? padchar : '0';
    var pad = new Array(1 + padlen).join(pad_char);
    return (pad + num).slice(-pad.length);
});

//VueRouter
const router = new VueRouter({
    mode: "history",
    base: "/",
    routes,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
});

//Turn off production tips
Vue.config.productionTip = false;

//VueX
import state from './state';
import mutations from './mutations';

const store = new Vuex.Store({
    state,
    mutations,
    plugins: [createPersistedState()],
});

//App Instance
new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app');

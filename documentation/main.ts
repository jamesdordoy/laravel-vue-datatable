//Imports
import 'bootstrap';
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment'
import App from './App.vue';
import routes from './routes';
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import createPersistedState from 'vuex-persistedstate';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


//Prism Code Highlighting
import prismmarkup from 'prismjs/components/prism-markup-templating.min.js';
import prismPhp from 'prismjs/components/prism-php.min.js';
import prismPhpExtras from 'prismjs/components/prism-php-extras.min.js';
import prismBash from 'prismjs/components/prism-bash.min.js';
import prismJson from 'prismjs/components/prism-json.min.js';

import prismTheme from "prismjs/themes/prism-okaidia.css";
import prism from "prismjs";


//Import Styles (Tailwind)

import bootstrapStyles from 'bootstrap/dist/css/bootstrap.css';

import './assets/styles/main.css';

//Import Plugin
import DataTable from '../src/plugin';

Vue.use(VueSweetalert2);

//Plugin Useage
Vue.use(Vuex);
Vue.use(DataTable);
Vue.use(VueRouter);

//Font Awesome
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faVuejs, faPhp, faLaravel, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faTable, faProjectDiagram, faRestroom, faHammer, faEllipsisV, faBars } from '@fortawesome/free-solid-svg-icons';

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

import formatDateFilter from './filters/format-date';
import padDigitFilter from './filters/pad-digit';

//Filters
Vue.filter('formatDate', formatDateFilter);
Vue.filter('padDigit', padDigitFilter);

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

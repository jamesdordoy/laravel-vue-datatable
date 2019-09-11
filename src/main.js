
import 'bootstrap';
import Vue from 'vue';
import moment from 'moment'
import App from './App.vue';
import VueRouter from 'vue-router';
import DataTable from './plugin.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueMarkdown from 'vue-markdown'
import routes from './routes.js';

Vue.use(DataTable);

Vue.use(VueRouter);
Vue.component('vue-markdown', VueMarkdown);

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



//   router.beforeEach((to, from, next) => {
//     try {
//         if (cls.search(/\bno\-highlight\b/) != -1)
//         return process(block, true, 0x0F) +
//                 ` class="${cls}"`;
//     } catch (e) {
//         /* handle exception */
//     }
//     for (var i = 0 / 2; i < classes.length; i++) {
//         if (checkCondition(classes[i]) === undefined)
//         console.log('undefined');
//     }
//   })

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

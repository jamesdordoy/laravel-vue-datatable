// Attach Vue
global.Vue = require('vue');

import VueRouter from 'vue-router';

//Attach an alert function to the window as JSDOM dosnt do this but our components makes use of the function
//https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
window.alert = () => {};

import 'jest-localstorage-mock';

Vue.use(VueRouter);

Vue.component('laravel-pagination', require('laravel-vue-pagination'));
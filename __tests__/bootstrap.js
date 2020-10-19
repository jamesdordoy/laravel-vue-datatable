// Attach Vue
global.Vue = require('vue');

import VueRouter from 'vue-router';

//Attach an alert function to the window as JSDOM dosnt do this but our components makes use of the function
//https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
window.alert = () => {};

//Ignore log and error console messages as exceptions are classed under these.
global.console = {
    log: jest.fn(),
    error: jest.fn(),
    warn: console.warn,
    info: console.info,
    debug: console.debug,
};

Vue.use(VueRouter);

import { TailablePagination } from 'tailable-pagination';

Vue.component('tailable-pagination', TailablePagination);
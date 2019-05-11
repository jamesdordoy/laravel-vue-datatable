import DataTable from "./components/DataTable.vue";

export default {
    install(Vue) {
        Vue.component("data-table", DataTable);
        Vue.component("laravel-pagination", require('laravel-vue-pagination'));
    }
};
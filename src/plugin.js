import DataTable from "./components/DataTable.vue";
import DataTableCell from "./components/DataTableCell.vue";

export default {
    install(Vue) {
        Vue.component("data-table", DataTable);
        Vue.component("data-table-cell", DataTableCell);
        Vue.component("laravel-pagination", require('laravel-vue-pagination'));
    },
};
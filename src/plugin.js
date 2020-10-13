import DataTable from "./components/DataTable.vue";
import DataTableCell from "./components/DataTableCell.vue";
import Pagination from 'pagination';

export default {
    install(Vue) {
        Vue.component("data-table", DataTable).default;
        Vue.component("data-table-cell", DataTableCell).default;
        Vue.component("tailable-pagination", Pagination).default;
    },
};

export { DataTable, DataTableCell, Pagination };
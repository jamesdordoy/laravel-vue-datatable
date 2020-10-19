import DataTable from "./components/DataTable.vue";
import DataTableCell from "./components/DataTableCell.vue";
import { TailablePagination } from 'tailable-pagination';

export default {
    install(Vue) {
        Vue.component("data-table", DataTable);
        Vue.component("data-table-cell", DataTableCell);
        Vue.component("tailable-pagination", TailablePagination);
    },
};

export { DataTable, DataTableCell };
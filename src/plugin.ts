import DataTable from "./components/DataTable.vue";
import { TailablePagination } from 'tailable-pagination';
import DataTableCell from "./components/DataTableCell.vue";

export default {
    install(Vue) {
        Vue.component("data-table", DataTable);
        Vue.component("data-table-cell", DataTableCell);
        Vue.component("tailable-pagination", TailablePagination);
    },
};

export { DataTable, DataTableCell };

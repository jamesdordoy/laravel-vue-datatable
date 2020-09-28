<template>
    <div :class="tableContainerClasses">
        <table :class="tableClasses" class="laravel-vue-datatable">
            <slot
                name="header">
                <thead
                    :class="tableHeaderClasses"
                    class="laravel-vue-datatable-thead">
                    <tr :class="tableRowClasses" class="laravel-vue-datatable-thead-tr">
                        <laravel-vue-data-table-th
                            :dir="dir"
                            @sort="sort"
                            :column="column"
                            :key="column.name"
                            v-for="column in columns"
                            :classes="tableHeadClasses">
                        </laravel-vue-data-table-th>
                    </tr>
                </thead>
            </slot>
            <slot name="body">
            </slot>
        </table>
    </div>
</template>

<script>

import LaravelVueDataTableTh from './DataTableTh';
import MergeClasses from "../mixins/MergeClasses";

export default {
    mixins: [MergeClasses],
    components: {
        LaravelVueDataTableTh
    },
    props: {
        dir: {
            type: String,
            default: '',
        },  
        columns: {
            type: Array,
            default: () => ([]),
            required: true,
        },
        tableClasses: {
            type: Object,
            default: () => ({}),
        },
        tableHeaderClasses: {
            type: Object,
            default: () => ({
                'p-3': true,
                'text-left': true,
            }),
        },
        tableRowClasses: {
            type: Object,
            default: () => ({}),
        },
        tableContainerClasses: {
            type: Object,
            default: () => ({}),
        },
        tableHeadClasses: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        headerClasses(column) {
            return this.mergeClasses(
                this.tableHeadClasses,
                {"table-header-sorting": column.orderable},
                (column.columnClasses || {}).thead || {}
            );
        },
        sort(column) {
            this.$emit('sort', column.name, column.columnName);
        },
    },
}
</script>

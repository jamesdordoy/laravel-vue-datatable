<template>
    <div :class="tableContainerClasses">
        <table :class="tableClasses">
            <thead :class="tableHeaderClasses">
                <tr :class="tableRowClasses">
                    <laravel-vue-data-table-th
                        :dir="dir"
                        @sort="sort"
                        :key="column.name"
                        :column="column"
                        :classes="tableHeadClasses"
                        v-for="column in columns">
                    </laravel-vue-data-table-th>
                </tr>
            </thead>
            <slot>
            </slot>
        </table>
    </div>
</template>

<script>

import LaravelVueDataTableTh from './DataTableTh';

export default {
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
            let classes = this.tableHeadClasses;
            classes['table-header-sorting'] = column.orderable;
            return classes;
        },
        sort(column) {
            this.$emit('sort', column.name, column.columnName);
        },
    },
}
</script>

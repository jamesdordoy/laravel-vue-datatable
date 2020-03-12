<template>
    <div :class="tableContainerClasses">
        <table :class="tableClasses" class="laravel-vue-datatable">
            <slot
                name="header"
                v-if="headerSlot">
            </slot>
            <thead
                v-else
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
            <slot name="body">
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
    computed: {
        headerSlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.header;
            }
            return null;
        },
    }
}
</script>

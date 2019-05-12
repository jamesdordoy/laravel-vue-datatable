<template>
    <div :class="tableContainerClasses">
        <table :class="tableClasses">
            <thead :class="tableHeaderClasses">
                <tr :class="tableRowClasses">
                    <th
                        scope="col"
                        :key="column.name"
                        v-for="column in columns"
                        :class="headerClasses(column)"
                        :style="'width: ' + column.width + '%'"
                        @click="column.filterable  ? $emit('sort', column.name) : null">
                        <i v-if="column.filterable" class="fa fa-sort" aria-hidden="true"></i>
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <slot>
            </slot>
        </table>
    </div>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Array,
                default: () => ([]),
                required: true,
            },
            sortKey: {
                type: String,
                default: ''
            },
            sortOrders :{
                type: Object,
                default: () => ({})
            },
            tableClasses: {
                type: Object,
                default: () => ({})
            },
            tableHeaderClasses: {
                type: Object,
                default: () => ({
                    'p-3': true,
                    'text-left': true,
                })
            },
            tableRowClasses: {
                type: Object,
                default: () => ({
                })
            },
            tableContainerClasses: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            headerClasses(column) {
                let classes = this.tableHeaderClasses;
                classes['table-header-sorting'] = column.filterable;
                return classes;
            }
        },
        computed: {}
    }
</script>

<style scoped>
    .table-header-sorting {
        cursor: pointer;
    }
</style>

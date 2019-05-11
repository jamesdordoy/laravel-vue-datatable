<template>
    <div :class="tableContainerClasses">
        <table :class="tableClasses">
            <thead :class="tableHeaderClasses">
                <tr class="">
                    <th
                        :class="headerClasses(column)"
                        scope="col"
                        :key="column.name"
                        v-for="column in columns"
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
                default: () => ([])
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
                default: () => ({})
            },
            tableContainerClasses: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            headerClasses(column) {

                let columnSize = 'text-left ' + (12 / this.columns.length);

                let classes = {
                    'table-header-sorting': column.filterable,
                    'p-3': true,
                    'w-25': true,
                };

                classes[columnSize] = true;

                return classes;
            }
        },
        computed: {
            
        }
    }
</script>

<style scoped>
    .table-header-sorting {
        cursor: pointer;
    }
</style>

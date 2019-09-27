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
                        @click="column.filterable  ? sort(column.name) : null">
                        <div class="inline-block">
                            <div
                                class="filter-asc"
                                :class="{'active-filter-asc': column.filterable && column.name == currentSort && dir == 'asc' }">
                            </div>
                            <div
                                class="filter-desc"
                                :class="{'active-filter-desc': column.filterable && column.name == currentSort && dir == 'desc' }">
                            </div>
                        </div>
                        {{ column.label }}
                    </th>
                </tr>
            </thead>
            <slot>
            </slot>
        </table>
    </div>
</template>

<style scoped>

.filter-asc {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid white;
    margin-bottom: 1px;
}

.filter-desc {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    margin-top: 1px;
}

.active-filter-asc {
    border-bottom: 5px solid #ccc;
}
.active-filter-desc {
    border-top: 5px solid #ccc;
}

.inline-block {
    display: inline-block;
}

</style>

<script>
    export default {
        data() {
            return {
                currentSort: '',
            };
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
                default: () => ({})
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
            },
            sort(name) {
                this.currentSort = name;
                this.$emit('sort', name);
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

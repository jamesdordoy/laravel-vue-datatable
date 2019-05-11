<template>
    <div :class="classes.container">
        <slot
            name="filters"
            v-if="filtersSlot"
            :table-data="tableData"
            :per-page="perPage"
            :url="url">
        </slot>
        <data-table-filters
            v-else
            :tableData="tableData"
            :per-page="perPage"
            @getData="getData">
        </data-table-filters>
        <vue-table
            @sort="sortBy"
            :sortKey="sortKey"
            :columns="columns"
            :sortOrders="sortOrders">
            <tbody
                :class="classes['t-head']">
                <tr
                    :key="item.id"
                    v-for="item in data.data">
                    <td 
                        :key="column.name"
                        v-for="column in columns"
                        :class="defaultTableCellStyle">
                        <data-table-cell
                            :value="item"
                            :name="column.name"
                            :classes="column.classes"
                            :click-event="column.click"
                            :comp="column.component">
                        </data-table-cell>
                    </td>
                </tr>
            </tbody>
        </vue-table>
        <slot
            name="pagination"
            v-if="paginationSlot"
            :links="data.links"
            :meta="data.meta">
        </slot>
        <laravel-pagination
            v-else
            :data="data"
            :align="classes.pagination.align"
            @pagination-change-page="getData">
                <span slot="prev-nav">Previous</span>
                <span slot="next-nav">Next</span>
        </laravel-pagination>
    </div>
</template>

<script>

import axios from 'axios';
import VueTable from './Table.vue';
import DataTableCell from './DataTableCell.vue';
import DataTableFilters from './DataTableFilters.vue';

export default {
    created() {
        this.getData();
    },
    mounted() {
        this.columns.forEach((column) => {
           this.sortOrders[column.name] = -1;
        });
    },
    watch: {
        url: {
            handler: function(newUrl) {
                this.getData(newUrl);
            }
        },
        tableData: {
            handler: function(newUrl) {
                this.getData();
            },
            deep: true
        }
    },
    components: {
        'vue-table': VueTable,
        'data-table-cell': DataTableCell,
        'data-table-filters': DataTableFilters,
    },
    data() {
        return {
            data: {},
            sortKey: 'id',
            sortOrders: {},
            draw: 0,
            tableData: {
                length: this.perPage[0],
                search: '',
                column: 0,
                dir: 'asc',
            },
        }
    },
    props: {
        url: {
            type: String,
            default: "/"
        },
        columns: {
            type: Array,
            default: () => ([])
        },
        perPage: {
            type: Array,
            default: () => ([])
        },
        classes: {
            type: Object,
            default: () => ({
                'container': {

                },
                'table-container': {
                    
                },
                'table': {
                    '': '',
                },
                't-head': {

                },
                't-body': {
                    
                },
                td: {

                },
                th: {
                    
                },
                'pagination': {
                    align: 'right'
                }
            })
        }
    },
    methods: {
        getData(url = this.url) {
            
            if (Number.isInteger(url)) {
                url = this.url + "?page=" + url;
            }

            this.draw++;
            
            axios.get(url, this.getRequestPayload)
            .then(response => {
                let data = response.data;

                if (this.draw == data.payload.draw) {
                    
                    this.data = data;
                }
            })
            .catch(errors => {
                /* eslint-disable no-console */
                console.log(errors);
            });
        },
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableData.column = this.getIndex(this.columns, 'name', key);
            this.tableData.dir = this.sortOrders[key] === 1 ? 'asc' : 'desc';
            this.getData();
        },
        getIndex(array, key, value) {
            return array.findIndex(i => i[key] == value)
        },
    },
    computed: {
        getRequestPayload() {

            let payload = this.tableData;
            payload.draw = this.draw;

            return {
                params: payload
            };
        },
        defaultTableCellStyle() {

            if (Object.keys(this.classes.td).length) {
                return this.classes.td;
            }

            let width = "w-" + (100 / this.columns.length);

            let classes = {
                'text-left': true,
            }

            classes[width] = true;
            
            return classes;
        },
        paginationSlot() {
            return this.$scopedSlots.pagination;
        },
        filtersSlot() {
            return this.$scopedSlots.filters;
        }
    }
}
</script>

<style>

tr {
    border-bottom: 1px solid grey;
}

</style>

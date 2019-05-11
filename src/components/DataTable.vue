<template>
    <div class="row">
        <div class="col-lg-12">
            <data-table-filters
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
                    class="">
                    <tr
                        :key="item.id"
                        v-for="item in data.data">
                        <td 
                            :key="column.name"
                            v-for="column in columns"
                            :class="'text-left w-' + (100 % columns.length)">
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

            <laravel-pagination
                :data="data"
                align="right"
                @pagination-change-page="getData">
                    <span slot="prev-nav">Previous</span>
                    <span slot="next-nav">Next</span>
            </laravel-pagination>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
import VueTable from './Table.vue'
import DataTableCell from './DataTableCell.vue'
import DataTableFilters from './DataTableFilters.vue'


export default {
    created() {
        this.getData();
    },
    mounted() {
        this.columns.forEach((column) => {
           this.sortOrders[column.name] = -1;
        });
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
            tableData: {
                draw: 0,
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
                't-head': {

                },
                't-body': {

                }
            })
        }
    },
    methods: {
        getData(url = this.url) {
            
            if (Number.isInteger(url)) {
                url = this.url + "?page=" + url;
            }

            this.tableData.draw++;
            
            axios.get(url, this.getRequestPayload)
            .then(response => {
                let data = response.data;
                if (this.tableData.draw == data.payload.draw) {
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
            return {
                params: this.tableData
            };
        }
    }
}
</script>

<style>

tr {
    border-bottom: 1px solid grey;
}

</style>

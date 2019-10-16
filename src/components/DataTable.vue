<template>
    <div>
        <slot
            :url="url"
            name="filters"
            v-if="filtersSlot"
            :per-page="perPage"
            :table-data="tableData">
        </slot>
        <data-table-filters
            v-else
            @getData="getData"
            :per-page="perPage"
            :tableData="tableData">
        </data-table-filters>
        <vue-table
            @sort="sortBy"
            :dir="tableData.dir"
            :sortKey="sortKey"
            :columns="columns"
            :sortOrders="sortOrders"
            :table-classes="classes.table"
            :table-header-classes="classes['t-head']"
            :table-row-classes="classes['t-head-tr']"
            :table-container-classes="classes['table-container']">
            <slot
                name="body"
                v-if="bodySlot"
                :data="data.data">
            </slot>
            <template v-else>
                <tbody
                    v-if="!! columns"
                    :class="classes['t-body']">
                    <tr
                        :key="item.id"
                        :class="classes['t-body-tr']"
                        v-for="item in data.data">
                        <td 
                            :key="column.name"
                            v-for="column in columns"
                            :class="classes.td">
                            <data-table-cell
                                :value="item"
                                :name="column.name"
                                :meta="column.meta"
                                :classes="column.classes"
                                :event="column.event"
                                :handler="column.handler"
                                :comp="column.component">
                            </data-table-cell>
                        </td>
                    </tr>
                </tbody>
            </template>
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
            :align="pagination.align"
            :limit="pagination.limit"
            :size="pagination.size"
            @pagination-change-page="getData">
                <span slot="prev-nav">Previous</span>
                <span slot="next-nav">Next</span>
        </laravel-pagination>
    </div>
</template>

<script>
import axios from 'axios';
import VueTable from './Table.vue';
import UrlFilters from '../mixins/UrlFilters';
import DataTableCell from './DataTableCell.vue';
import DataTableFilters from './DataTableFilters.vue';

export default {
    created() {
        if (this.addFiltersToUrl) {
            this.checkParameters(this.tableData);
        } else {
            this.getData();
        }
    },
    mounted() {
        this.columns.forEach((column) => {
           this.sortOrders[column.name] = -1;
        });
    },
    mixins: [UrlFilters],
    watch: {
        url: {
            handler: function(newUrl) {
                this.getData(newUrl); 
            },
        },
        tableData: {
            handler: function() {
                this.getData();
            },
            deep: true,
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
                column: this.columns[0].name,
                dir: this.orderDir,
                filters: this.filters,
            },
        };
    },
    props: {
        url: {
            type: String,
            default: "/",
            required: true,
        },
        columns: {
            type: Array,
            default: () => ([]),
            required: true,
        },
        perPage: {
            type: Array,
            default: () => ([
                '10',
                '25',
                '50'
            ]),
        },
        orderDir: {
            type: String,
            default: "asc",
            validator: function (value) {
                return ['asc', 'desc'].indexOf(value) !== -1
            }
        },
        classes: {
            type: Object,
            default: () => ({
                'table-container': {
                    'table-responsive': true,
                },
                'table': {
                    'table': true,
                    'table-striped': true,
                    'table-dark': true,
                },
                't-head': {},
                't-body': {},
                'td': {},
                'th': {},
            }),
        },
        pagination: {
            type: Object,
            default: () => ({
                limit: 1,
                align: 'right',
            }),
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        addFiltersToUrl: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        getData(url = this.url) {

            url = this.checkUrlForPagination(url);
            this.incrementDraw();
            
            axios.get(url, this.getRequestPayload)
                .then(response => {
                    if (response) {
                        let data = response.data;
                        if (this.checkTableDraw(data.payload.draw)) {
                            this.data = data;
                            if (this.addFiltersToUrl) {
                                this.updateParameters(this.tableData);
                            }
                        }
                    }
                })
                .catch(errors => {
                    alert(errors);
                });
        },
        sortBy(key) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableData.column = key;
            this.tableData.dir = this.sortOrders[key] === 1 ? 'desc' : 'asc';
        },
        getIndex(array, key, value) {
            return array.findIndex(i => i[key] == value);
        },
        incrementDraw() {
            this.draw++;
        },
        checkTableDraw(draw) {
            if (this.draw == draw) {
                return true;
            }
            return false;
        },
        checkUrlForPagination(url) {
            if (Number.isInteger(url)) {
                url = this.url + "?page=" + url;
                return url;
            }
            return url;
        }
    },
    computed: {
        getRequestPayload() {
            let payload = Object.assign({}, this.tableData);
            delete payload.filters;
            payload = Object.assign(payload, this.tableData.filters);
            payload.draw = this.draw;
            return {
                params: payload,
            };
        },
        paginationSlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.pagination;
            }
            return null;
        },
        filtersSlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.filters;
            }
            return null;
        },
        bodySlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.body;
            }
            return null;
        }
    }
}
</script>

<style>


</style>

<template>
    <div>
        <!-- Top Filters -->
        <slot
            :url="url"
            name="filters"
            :per-page="perPage"
            :table-data="tableProps">
            <laravel-vue-data-table-filters
                :per-page="perPage"
                :table-data="tableProps"
                :placeholder-search="translate.placeholderSearch">
            </laravel-vue-data-table-filters>
        </slot>
        
        <!-- Table component -->
        <laravel-vue-table
            @sort="sortBy"
            :sortKey="sortKey"
            :columns="columns"
            :dir="tableProps.dir"
            :sortOrders="sortOrders"
            :table-classes="computedClasses.table"
            :table-head-classes="computedClasses['th']"
            :table-header-classes="computedClasses['t-head']"
            :table-row-classes="computedClasses['t-head-tr']"
            :table-container-classes="computedClasses['table-container']">
            <!-- Table Header -->
            <template
                slot="header"
                v-if="headerSlot">
                <slot
                    name="header"
                    :table-props="tableProps">
                </slot>
            </template>
            <!-- Table Body -->
            <template
                slot="body"
                v-if="bodySlot">
                <slot
                    name="body"
                    :data="tableData.data">
                </slot>
            </template>
            <template slot="body" v-else>
                <tbody
                    v-if="columns"
                    :class="computedClasses['t-body']"
                    class="laravel-vue-datatable-tbody">
                    <tr
                        :key="item.id"
                        :class="computedClasses['t-body-tr']"
                        v-for="(item, rowIndex) in tableData.data"
                        @click="$emit('row-clicked', item)"
                        class="laravel-vue-datatable-tbody-tr">
                        <td 
                            :key="column.name"
                            :class="bodyCellClasses(column)"
                            v-for="(column, columnIndex) in columns"
                            class="laravel-vue-datatable-td">
                            <laravel-vue-data-table-cell
                                :row="rowIndex"
                                :column="columnIndex"
                                :value="item"
                                :transform="column.transform"
                                :name="column.name"
                                :meta="column.meta"
                                :event="column.event"
                                :classes="column.classes"
                                :handler="column.handler"
                                :comp="column.component">
                            </laravel-vue-data-table-cell>
                        </td>
                    </tr>
                </tbody>
            </template>
        </laravel-vue-table>

        <!-- Bottom Filters -->
        <slot
            :page="page"
            name="pagination"
            :meta="tableData.meta"
            :links="tableData.links">
            <laravel-pagination
                :data="tableData"
                :size="pagination.size"
                :limit="pagination.limit"
                :align="pagination.align"
                @pagination-change-page="paginationChangePage">
                    <span slot="prev-nav">{{ translate.previousButton }}</span>
                    <span slot="next-nav">{{ translate.nextButton }}</span>
            </laravel-pagination>
        </slot>
        
    </div>
</template>

<script>

import axios from 'axios';
import VueTable from './Table.vue';
import UrlFilters from '../mixins/UrlFilters';
import MergeClasses from "../mixins/MergeClasses";
import DataTableCell from './DataTableCell.vue';
import DataTableFilters from './DataTableFilters.vue';

export default {
    created() {
        if (this.addFiltersToUrl) {
            this.checkParameters(this.tableProps);
        } else if(this.url) {
            this.getData(this.url, this.getRequestPayload);
        }

        const defaults = require("lodash.defaultsdeep");
        this.computedClasses = defaults(this.classes,(window.LaravelVueDatatable || {}).classes || {},
            {
                "table-container": {
                "table-responsive": true
                },
                table: {
                table: true,
                "table-striped": true,
                border: true
                },
                "t-head": {},
                "t-body": {},
                td: {},
                th: {}
            }
        );

        if (this.theme == "dark") {
            this.computedClasses['table']['table-dark'] = true;
        }

        let debounce = require('lodash.debounce');

        this.debounceGetData = debounce(this.getData, this.debounceDelay ? this.debounceDelay : 0);
    },
    mounted() {
        this.columns.forEach((column) => {
           this.sortOrders[column.name] = -1;
        });
    },
    mixins: [UrlFilters, MergeClasses],
    watch: {
        url: {
            handler: function(newUrl) {
                this.updateCurrentPage(newUrl);
                this.debounceGetData(newUrl);
            },
        },
        tableProps: {
            handler: function() {
                //Reset current page if searching
                if (this.tableProps.search) {
                    this.page = 1;
                }

                //Check if we are using the default request otherwise emit
                if (this.url) {
                    this.debounceGetData();
                } else {
                    let props = this.tableProps;
                    props.page = this.page;
                    this.$emit("on-table-props-changed", props);
                }
            },
            deep: true,
        },
        data: {
            handler: function(data) {
                this.tableData = data;
            }
        }
    },
    data() {
        return {
            debounceGetData: null,
            tableData: {},
            sortKey: 'id',
            sortOrders: {},
            draw: 0,
            page: 1,
            tableProps: {
                search: '',
                dir: this.orderDir,
                column: this.orderBy,
                filters: this.filters,
                length: this.perPage[0],
            },
            computedClasses: {},
        };
    },
    methods: {
        async getData(url = this.url, options = this.getRequestPayload) {

            this.$emit("loading");
            
            //Remove any custom query string parameters
            let baseUrl = url.split("?")[0];

            let response = await axios.get(baseUrl, options)
                .catch(errors => {
                    alert(errors);
                });

            if (response) {
                
                if (this.checkTableDraw(response.data.payload.draw)) {
                    
                    this.draw++;
                    this.tableData = response.data;
                    
                    if (this.addFiltersToUrl) {
                        this.updateParameters(this.tableProps);
                    }
                    
                    this.$emit("finished-loading");
                }
            }
        },
        addRecord(data) {
            this.tableData.data.push(data);
        },
        sortBy(key, columnName = null) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableProps.column = columnName ? columnName : key;
            this.tableProps.dir = this.sortOrders[key] === 1 ? 'desc' : 'asc';
        },
        getIndex(array, key, value) {
            return array.findIndex(i => i[key] == value);
        },
        incrementDraw() {
            this.draw++;
        },
        checkTableDraw(draw) {
            return this.draw == draw;
        },
        updateCurrentPage(url) {
            const params = (new URL(url)).searchParams;
            const page = params.get('page');

            if (page) {
                this.page = page;
            }
        },
        paginationChangePage(page) {
            this.page = page;
            if (Object.keys(this.data).length) {
                //Add the users pagination
                let props = this.tableProps;
                props.page = this.page;
                this.$emit("on-table-props-changed", props);
            } else {
                this.getData();
            }
        },
        bodyCellClasses(column) {
            return this.mergeClasses(
                typeof column.classes === "object" && column.classes["!override"] ? {} : this.computedClasses.td,
                column.classes || {}, (column.classes || {}).td || {});
        }
    },
    components: {
        'laravel-vue-table': VueTable,
        'laravel-vue-data-table-cell': DataTableCell,
        'laravel-vue-data-table-filters': DataTableFilters,
    },
    computed: {
        bodySlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.body;
            }
            return null;
        },
        headerSlot() {
            if (this.$scopedSlots) {
                return this.$scopedSlots.header;
            }
            return null;
        },
        getRequestPayload() {
            let payload = Object.assign({}, this.tableProps);
            delete payload.filters;
            payload = Object.assign(payload, this.tableProps.filters);
            payload = Object.assign(payload, this.tableProps.filters);
            payload.draw = this.draw;
            payload.page = this.page;
            return {
                params: payload,
                headers: this.headers,
            };
        },
    },
    props: {
        columns: {
            type: Array,
            default: () => ([]),
            required: true,
        },
        url: {
            type: String,
            default: "",
        },
        orderBy: {
            type: String,
            default: 'id',
        },
        data: {
            type: Object,
            default: () => ({}),
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        addFiltersToUrl: {
            type: Boolean,
            default: false,
        },
        debounceDelay: {
            type: Number,
            default: 0,
        },
        pagination: {
            type: Object,
            default: () => ({
                limit: 1,
                align: 'right',
            }),
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
                return [
                    'asc',
                    'desc'
                ].indexOf(value) !== -1;
            }
        },
        theme: {
            type: String,
            default: "light",
            validator: function (value) {
                return [
                    'light',
                    'dark'
                ].indexOf(value) !== -1;
            }
        },
        classes: {
            type: Object,
            default: () => ({
                "table-container": {
                    "table-responsive": true,
                },
                "table": {
                    "table": true,
                    "table-striped": true,
                    "border": true,
                },
                "t-head": {},
                "t-body": {},
                "td": {},
                "th": {},
            }),
        },
        headers: {
            type: Object,
            default: () => ({})
        },
        translate: {
            type: Object,
            default: () => (Object.assign({}, {
                nextButton: 'Next',
                previousButton: 'Previous',
                placeholderSearch: 'Search Table',
            }, (window.LaravelVueDatatable || {}).translate || {})
        }
    },
}
</script>

<template>
    <div
        :class="getClasses.container">
        <!-- Top Filters -->
        <slot
            :url="url"
            name="filters"
            :per-page="perPage"
            :table-data="tableData"
            :meta="tableData.meta"
            :links="tableData.links"
            :table-filters="tableProps"
            :loadDiffrentPage="loadDiffrentPage">

            <laravel-vue-data-table-filters
                :per-page="perPage"
                :framework="framework"
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
            :table-classes="getClasses.table"
            :table-head-classes="getClasses['th']"
            :table-header-classes="getClasses['t-head']"
            :table-row-classes="getClasses['t-head-tr']"
            :table-container-classes="getClasses['table-container']">
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
                    :class="getClasses['t-body']"
                    class="laravel-vue-datatable-tbody">
                    <tr
                        :key="item.id"
                        :class="getClasses['t-body-tr']"
                        v-for="(item, rowIndex) in tableData.data"
                        @click="$emit('row-clicked', item)"
                        class="laravel-vue-datatable-tbody-tr">
                        <td 
                            :key="column.name"
                            class="laravel-vue-datatable-td"
                            :class="bodyCellClasses(column)"
                            v-for="(column, columnIndex) in columns">
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
                <slot
                    name="footer"
                    :table-props="tableProps">
                </slot>
            </template>
        </laravel-vue-table>

        <!-- Bottom Filters -->
        <slot
            :page="page"
            name="pagination"
            :meta="tableData.meta"
            :links="tableData.links"
            :loadDiffrentPage="loadDiffrentPage">
            
            <tailable-pagination
                :data="tableData"
                :showNumbers="true"
                :framework="framework"
                :translate="translate"
                :size="pagination.size"
                :limit="pagination.limit"
                @page-changed="paginationChangePage">
            </tailable-pagination>
        </slot>
    </div>
</template>

<script>

import axios from 'axios';
import VueTable from './Table';
import DataTableCell from './DataTableCell';
import UrlFilters from '../mixins/UrlFilters';
import DataTableFilters from './DataTableFilters';
import TailwindTableTheme from "../themes/Tailwind";
import MergeClasses from "../functions/MergeClasses";
import BootstrapTableTheme from "../themes/Bootstrap";
import ThemeValidator from "../validators/data-table-theme";
import OrderDirValidator from "../validators/data-table-order-dir";
import FrameworkValidator from "../validators/data-table-framework";

export default {
    components: {
        'laravel-vue-table': VueTable,
        'laravel-vue-data-table-cell': DataTableCell,
        'laravel-vue-data-table-filters': DataTableFilters,
    },
    data() {
        return {
            debounceGetData: () => {},
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
        };
    },
    created() {
        if (this.addFiltersToUrl) {
            this.checkParameters(this.tableProps);
        } else if(this.url) {
            this.getData(this.url, this.getRequestPayload);
        }

        const debounce = require('lodash.debounce');

        this.debounceGetData = debounce(this.getData, this.debounceDelay ? this.debounceDelay : 0);
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
        loadDiffrentPage(page) {
            this.page = page;
            this.getData();
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
            return MergeClasses(
                typeof column.columnClasses === "object" && column.columnClasses["!override"] ? {} : this.getClasses.td,
                column.columnClasses || {}, (column.columnClasses || {}).td || {}
            );
        }
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
        getClasses() {
            const defaults = require("lodash.defaultsdeep");

            if (this.framework === "tailwind") {
                return defaults(this.classes, (window.LaravelVueDatatable || {}).classes || {}, TailwindTableTheme); 
            }

            let bootstrapTheme = BootstrapTableTheme;

            if (this.theme === "dark") {
                bootstrapTheme.table["table-dark"] = true;
            }

            return defaults(this.classes, (window.LaravelVueDatatable || {}).classes || {}, bootstrapTheme); 
        }
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
            validator: OrderDirValidator
        },
        framework: {
            type: String,
            default: "bootstrap",
            validator: FrameworkValidator
        },
        theme: {
            type: String,
            default: "light",
            validator: ThemeValidator,
        },
        classes: {
            type: Object,
            default: () => ({}),
        },
        headers: {
            type: Object,
            default: () => ({})
        },
        translate: {
            type: Object,
            default: () => Object.assign({}, {
                nextButton: 'Next',
                previousButton: 'Previous',
                placeholderSearch: 'Search Table',
            }, (window.LaravelVueDatatable || {}).translate || {})
        }
    },
}
</script>

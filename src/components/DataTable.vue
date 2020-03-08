<template>
    <div>
        <!-- Top Filters -->
        <slot
            :url="url"
            name="filters"
            v-if="filtersSlot"
            :per-page="perPage"
            :table-data="tableProps">
        </slot>
        <laravel-vue-data-table-filters
            v-else
            :per-page="perPage"
            :table-data="tableProps">
        </laravel-vue-data-table-filters>
        <!-- Table component -->
        <laravel-vue-table
            @sort="sortBy"
            :sortKey="sortKey"
            :columns="columns"
            :dir="tableProps.dir"
            :sortOrders="sortOrders"
            :table-classes="classes.table"
            :table-head-classes="classes['th']"
            :table-header-classes="classes['t-head']"
            :table-row-classes="classes['t-head-tr']"
            :table-container-classes="classes['table-container']">
            <!-- Table Body -->
            <slot
                name="body"
                v-if="bodySlot"
                :data="tableData.data">
            </slot>
            <template v-else>
                <tbody
                    v-if="columns"
                    :class="classes['t-body']"
                    class="laravel-vue-datatable-tbody">
                    <tr
                        :key="item.id"
                        :class="classes['t-body-tr']"
                        v-for="item in tableData.data"
                        @click="$emit('rowClicked', item)"
                        class="laravel-vue-datatable-tbody-tr">
                        <td 
                            :key="column.name"
                            :class="classes.td"
                            v-for="column in columns"
                            class="laravel-vue-datatable-td">
                            <laravel-vue-data-table-cell
                                :value="item"
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
            v-if="paginationSlot"
            :meta="tableData.meta"
            :links="tableData.links">
        </slot>
        <laravel-pagination
            v-else
            :data="tableData"
            :size="pagination.size"
            :limit="pagination.limit"
            :align="pagination.align"
            @pagination-change-page="paginationChangePage">
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
            this.checkParameters(this.tableProps);
        } else if(this.url) {
            this.getData(this.url, this.getRequestPayload);
        }

        if (this.theme == "dark") {
            this.classes['table']['table-dark'] = true;
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
                this.loading = false;
                this.getData(newUrl, this.getRequestPayload); 
            },
        },
        tableProps: {
            handler: function() {
                this.loading = false;

                if (this.url) {
                    this.getData(this.url, this.getRequestPayload);
                } else {
                    let props = this.tableProps;
                    props.page = this.page;
                    this.$emit("onTablePropsChanged", props);
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
    components: {
        'laravel-vue-table': VueTable,
        'laravel-vue-data-table-cell': DataTableCell,
        'laravel-vue-data-table-filters': DataTableFilters,
    },
    data() {
        return {
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
            loading: false,
        };
    },
    methods: {
        getData(url = this.url, options = this.getRequestPayload) {

            url = this.checkUrlForPagination(url);

            this.$emit("loading");
            
            axios.get(url, options)
                .then(response => {
                    if (response) {
                        let data = response.data;

                        if (this.checkTableDraw(data.payload.draw)) {
                            this.tableData = data;
                            this.loading = true;
                            this.$emit("finishedLoading");

                            if (this.addFiltersToUrl) {
                                this.updateParameters(this.tableProps);
                            }
                        }
                    }
                })
                .catch(errors => {
                    alert(errors);
                });
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
        },
        paginationChangePage(page) {
            this.page = page;
            if (Object.keys(this.data).length) {
                //Add the users pagination
                let props = this.tableProps;
                props.page = this.page;
                this.$emit("onTablePropsChanged", props);
            } else {
                //Add Laravel Vue Pagination
                let url = this.url;
                url += `?page=${this.page}`;
                this.getData(url, this.getRequestPayload);
            }
        },
    },
    computed: {
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
        },
        getRequestPayload() {
            let payload = Object.assign({}, this.tableProps);
            delete payload.filters;
            payload = Object.assign(payload, this.tableProps.filters);
            payload = Object.assign(payload, this.tableProps.filters);
            payload.draw = this.draw;
            return {
                params: payload,
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
    },
}
</script>

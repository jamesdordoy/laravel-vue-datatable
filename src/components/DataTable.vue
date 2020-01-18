<template>
    <div style="position: relative;">
        <div style="position: relative;">
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
                :sortKey="sortKey"
                :columns="columns"
                :dir="tableData.dir"
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
                            v-for="item in data.data"
                            :class="classes['t-body-tr']">
                            <td 
                                :key="column.name"
                                :class="classes.td"
                                v-for="column in columns">
                                <data-table-cell
                                    :value="item"
                                    :name="column.name"
                                    :meta="column.meta"
                                    :event="column.event"
                                    :comp="column.component"
                                    :classes="column.classes"
                                    :handler="column.handler">
                                </data-table-cell>
                            </td>
                        </tr>
                    </tbody>
                    
                </template>
            </vue-table>
            <slot
                :meta="data.meta"
                name="pagination"
                :links="data.links"
                v-if="paginationSlot">
            </slot>
            <laravel-pagination
                v-else
                :data="data"
                :size="pagination.size"
                :limit="pagination.limit"
                :align="pagination.align"
                @pagination-change-page="getData">
                    <span slot="prev-nav">Previous</span>
                    <span slot="next-nav">Next</span>
            </laravel-pagination>
        </div>
    </div>
</template>

<style>


</style>

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
                this.getData(newUrl); 
            },
        },
        tableData: {
            handler: function() {
                this.loading = false;
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
                search: '',
                dir: this.orderDir,
                column: this.orderBy,
                filters: this.filters,
                length: this.perPage[0],
            },
            loading: false,
        };
    },
    props: {
        url: {
            type: String,
            default: "/",
            required: true,
        },
        orderBy: {
            type: String,
            default: 'id',
        },
        filters: {
            type: Object,
            default: () => ({}),
        },
        addFiltersToUrl: {
            type: Boolean,
            default: false,
        },
        columns: {
            type: Array,
            default: () => ([]),
            required: true,
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
    methods: {
        getData(url = this.url) {

            url = this.checkUrlForPagination(url);
            this.incrementDraw();

            this.$emit("loading");
            
            axios.get(url, this.getRequestPayload)
                .then(response => {
                    if (response) {
                        let data = response.data;
                        if (this.checkTableDraw(data.payload.draw)) {
                            this.data = data;
                            this.loading = true;
                            this.$emit("finishedLoading");
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
        sortBy(key, columnName = null) {
            this.sortKey = key;
            this.sortOrders[key] = this.sortOrders[key] * -1;
            this.tableData.column = columnName ? columnName :key;
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
            let payload = Object.assign({}, this.tableData);
            delete payload.filters;
            payload = Object.assign(payload, this.tableData.filters);
            payload.draw = this.draw;
            return {
                params: payload,
            };
        },
    }
}
</script>

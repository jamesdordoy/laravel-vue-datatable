
<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Overriding the Filters and Pagination</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            If the included pagination or filters do not meet your requirements or if the styling is incorrect, they can be overridden using scoped slots.
        </information-alert>

        <pre v-highlightjs v-show="code">
            <override-filters-and-pagination>
            </override-filters-and-pagination>
        </pre>

        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
            <div slot="filters" slot-scope="{ tableData, perPage }">
                <div class="row mb-2">
                    <div class="col-md-6">
                        <select class="form-control" v-model="tableData.length">
                            <option :key="page" v-for="page in perPage">{{ page }}</option>
                        </select>
                    </div>
                    <div class="col-md-6">
                        <v-select
                            label="name"
                            :options="selectOptions"
                            placeholder="Search Users"
                            @input="updateSelectedUser($event, tableData)"
                            @search="searchUsersByName">
                        </v-select>
                    </div>
                </div>
            </div>

            <div slot="pagination" slot-scope="{ links = {}, meta = {} }">
                <nav class="row">
                    <div class="col-md-6 text-left">
                        <span>
                            Showing {{ meta.from }} to {{ meta.to }} of {{ meta.total }} Entries
                        </span>
                    </div>
                    <div class="col-md-6 text-right">
                        <button
                            v-if="links.prev"
                            class="btn btn-primary"
                            @click="url = links.prev">
                            Prev
                        </button>
                        <button
                            v-else
                            :disabled="true"
                            class="btn btn-primary"
                            @click="url = links.prev">
                            Prev
                        </button>
                        <button
                            v-if="links.next"
                            class="btn btn-primary ml-2"
                            @click="url = links.next">
                            Next
                        </button>
                        <button
                            v-else
                            :disabled="true"
                            class="btn btn-primary ml-2"
                            @click="url = links.next">
                            Next
                        </button>
                    </div>        
                </nav>
            </div>
        </data-table>
    </div>
</template>

<style>
.vs__search{
    padding: 2px !important;
}
</style>

<script>

    import axios from 'axios';
    import vSelect from 'vue-select'
    import 'vue-select/dist/vue-select.css';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import VueSwitch from '../../components/generic/Switch';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import OverrideFiltersAndPagination from '../../markdown/examples/override-filters-and-pagination.md';

    export default {
        name: 'Override-Table-Filters-And-Pagination',
        components: {
            // eslint-disable-next-line
            vSelect,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            OverrideFiltersAndPagination,
        },
        mixins: [CodeExample],
        created() {
            this.searchUsersByName();
        },
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                selectOptions: [],
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                ]
            }
        },
        methods: {
            updateSelectedUser(row, tableData) {
                if (row) {
                    tableData.search = row.name;
                } else {
                    tableData.search = '';
                }
            },
            searchUsersByName(term = '') {
                axios.get(process.env.VUE_APP_DATATABLE_URL_SEARCH + "?search=" + term)
                    .then(response => {
                        this.selectOptions = response.data;
                    });
            }
        }
    }
</script>

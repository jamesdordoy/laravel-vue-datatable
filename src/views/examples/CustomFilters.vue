<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Adding Custom Filters</h2>
            </div>
        </div>

        <information-alert>
            You can also add your own custom filters to be sent to the Laravel backend
        </information-alert>

        <pre v-highlightjs v-show="code">
            <custom-filters-markdown>
            </custom-filters-markdown>
        </pre>
        <data-table
            :url="url"
            v-show="!code"
            :filters="filters"
            :columns="columns">
            <div slot="filters" slot-scope="{ tableData, perPage }">
                <div class="row mb-2">
                    <div class="col-md-4">
                        <select class="form-control" v-model="tableData.length">
                            <option :key="page" v-for="page in perPage">{{ page }}</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select
                            v-model="tableData.filters.isAdmin"
                            class="form-control">
                            <option value>All</option>
                            <option value='admin'>Admin</option>
                            <option value='staff'>Staff</option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <input
                            name="name"
                            class="form-control"
                            v-model="tableData.search"
                            placeholder="Search Table">
                    </div>
                </div>
            </div>
        </data-table>
    </div>
</template>

<script>

    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import DataTableButtonCell from '../../components/generic/DataTableButtonCell.vue';
    import CustomFiltersMarkdown from '../../markdown/examples/custom-filters.md';

    export default {
        name: 'Custom-Filters',
        mixins: [CodeExample],
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            DataTableButtonCell,
            // eslint-disable-next-line
            CustomFiltersMarkdown,        
        },
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                filters: {
                    isAdmin: '',
                },
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        filterable: true,
                    },
                    {
                        label: '',
                        name: 'View',
                        filterable: false,
                        width: 10,
                        classes: { 
                            'btn': true,
                            'btn-sm': true,
                            'btn-primary': true,
                        },
                        event: "click",
                        handler: this.displayRow,
                        component: DataTableButtonCell,
                    },
                ]
            }
        },
        methods: {
            displayRow(data) {
                alert(`You clicked row ${data.id}`);
            }
        },
    }
</script>

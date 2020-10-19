<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Adding Custom Filters</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
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
                            v-model="tableData.filters.isActive"
                            class="form-control">
                            <option value>All</option>
                            <option value='1'>Active</option>
                            <option value='0'>Inactive</option>
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
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import InformationAlert from '../../example-components/InformationAlert';
    import DataTableButtonCell from '../../example-components/DataTableButtonCell.vue';
    import CustomFiltersMarkdown from '../../markdown/examples/custom-filters.md';

    export default {
        name: 'Custom-Filters',
        mixins: [CodeExample],
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            VueSwitch,
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
                    isActive: '',
                },
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
                    {
                        label: 'Active',
                        name: 'is_active',
                        orderable: true,
                    },
                    {
                        label: '',
                        name: 'View',
                        orderable: false,
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

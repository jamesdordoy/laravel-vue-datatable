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
            :columns="columns">
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
                url: process.env.VUE_APP_DATATABLE_URL,
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
                        event: "click",
                        handler: this.displayRow,
                        component: DataTableButtonCell,
                        meta: {
                            foo: "bar"
                        },
                        classes: { 
                            'btn': true,
                            'btn-primary': true,
                            'btn-sm': true,
                        },
                        width: 10,
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

<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Pivot Table Example</h2>
            </div>
        </div>

        <information-alert>
            Sadly I couldn't find a clean way to allow for column ordering on pivot table fields.
            It is not currently possible to order data based on related values using the <code>with()</code>
            method as pivot tables are based around Eloquent queries. 
            It would be possible to create a custom query using the Laravel Query Builder or raw SQL but this will be more complex and is too specific to a project's requirements
            to create a universal solution.
        </information-alert>

        <pre v-highlightjs v-show="code">
            <pivot-markdown>
            </pivot-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
        </data-table>
    </div>
</template>

<script>

    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import PivotMarkdown from '../../markdown/examples/pivot.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import DataTableListCell from '../../components/generic/DataTableListCell.vue';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            PivotMarkdown,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            DataTableListCell,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_PIVOT_URL,
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
                        label: 'Roles',
                        name: 'roles',
                        component: DataTableListCell,
                    },
                ]
            }
        },
    }
</script>

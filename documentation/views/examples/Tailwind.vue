<template>
    <div class="">
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Tailwind Example</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            I suggest wrapping the datatable component in your own component e.g. TailwindDatatable.vue so that the classes are limited to a single file.
            <br><br>
            Note, some of the styling is incorrect on the documentation such as the search box due to the css framework clashing with Bootstrap. You can see the tables design in full with more detail 
            <a href="https://tailwindcomponents.com/component/table-responsive-with-filters">here</a>.
        </information-alert>

        <pre v-highlightjs v-show="code">
            <tailwind-markdown>
            </tailwind-markdown>
        </pre>

        <div
            v-show="!code"
            class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            
            <data-table
                :url="url"
                framework="tailwind"
                v-show="!code"
                :columns="columns">
            </data-table>
        </div>
    </div>
</template>


<script>
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import InformationAlert from '../../example-components/InformationAlert';
    import TailwindMarkdown from '../../markdown/examples/tailwind.md';
    import DataTableDropdownCell from '../../example-components/DataTableDropdownCell';
    import DataTableCurrencyCell from '../../example-components/DataTableCurrencyCell';
    import DataTableIsActiveCell from '../../example-components/DataTableIsActiveCell';
    import DataTableNameAndImageCell from '../../example-components/DataTableNameAndImageCell';
    
    export default {
        name: 'Tailwind',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            TailwindMarkdown,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            DataTableDropdownCell,
            // eslint-disable-next-line
            DataTableCurrencyCell,
            // eslint-disable-next-line
            DataTableIsActiveCell,
            // eslint-disable-next-line
            DataTableNameAndImageCell,
            // eslint-disable-next-line
            InformationAlert,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                columns: [
                    {
                        width: 30,
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                        component: DataTableNameAndImageCell
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                    {
                        label: 'Role',
                        name: 'role.name',
                        columnName: "roles.name",
                        orderable: true,
                    },
                    {
                        label: 'Status',
                        name: 'is_active',
                        orderable: true,
                        transform: ({data, name}) => data[name] ? "Active" : "Inactive",
                    },
                    {
                        label: 'Cost',
                        name: 'cost',
                        orderable: true,
                        transform: ({data, name}) => `£${data[name]}`,
                    },
                    {
                        label: '',
                        name: '',
                        component: DataTableDropdownCell,
                    },
                ],
                filters: {
                    isActive: '',
                },
            };
        },
    }
</script>

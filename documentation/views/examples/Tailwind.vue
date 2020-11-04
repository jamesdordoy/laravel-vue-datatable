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
            To change to the provided Tailwind UI just add framework="tailwind" to your table
        </information-alert>

        <pre v-show="code">
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
    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import TailwindMarkdown from '../../markdown/examples/tailwind.md';
    import InformationAlert from '../../example-components/InformationAlert';
    import DataTableDropdownCell from '../../example-components/DataTableDropdownCell';
    import DataTableCurrencyCell from '../../example-components/DataTableCurrencyCell';
    import DataTableIsActiveCell from '../../example-components/DataTableIsActiveCell';
    import DataTableNameAndImageCell from '../../example-components/DataTableNameAndImageCell';
    
    export default {
        name: 'Tailwind',
        components: {
            DataTable,
            VueSwitch,
            TailwindMarkdown,
            InformationAlert,
            DataTableDropdownCell,
            DataTableCurrencyCell,
            DataTableIsActiveCell,
            DataTableNameAndImageCell,
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
        mounted() {
            Prism.highlightAll();
        },
    }
</script>

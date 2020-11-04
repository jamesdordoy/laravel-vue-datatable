<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Overriding the Datatable Header</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            Note you will need to manage column sorting using your own methods.
        </information-alert>

        <pre v-show="code">
            <override-table-header-markdown>
            </override-table-header-markdown>
        </pre>

        <data-table
            :url="url"
            v-show="!code"
            :columns="columns">
            <thead slot="header" slot-scope="{ tableProps }">
                <tr>
                    <th class="text-center" colspan="3">List</th>
                </tr>
                <tr>
                    <th @click="sort('id', tableProps)">ID</th>
                    <th @click="sort('name', tableProps)">Name</th>
                    <th @click="sort('email', tableProps)">Email</th>
                </tr>
            </thead>
        </data-table>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import InformationAlert from '../../example-components/InformationAlert';
    import OverrideTableHeaderMarkdown from '../../markdown/examples/override-table-header.md';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            OverrideTableHeaderMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                sortOrders: {},
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
        mounted() {
            Prism.highlightAll();

            this.columns.forEach((column) => {
                this.sortOrders[column.name] = -1;
            });
        },
        methods: {
            sort(key, tableProps) {
                tableProps.column = key;
                this.sortOrders[key] = this.sortOrders[key] * -1;
                tableProps.dir =  this.sortOrders[key] === 1 ? 'desc' : 'asc';
            }
        }
    }
</script>

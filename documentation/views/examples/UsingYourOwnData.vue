<template>
    <div>
        <div class="flex flex-wrap">
            <div class="w-2/3">
                <h2 class="markdown-header">Using your own data and requests</h2>
            </div>
            <div class="w-1/3 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>
        <div class="w-full">
            <pre v-show="code">
                <own-data-markdown>
                </own-data-markdown>
            </pre>
            <data-table
                :data="data"
                v-show="!code"
                :columns="columns"
                @on-table-props-changed="reloadTable">
            </data-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import OwnDataMarkdown from '../../markdown/examples/own-data.md';
    import InformationAlert from '../../example-components/InformationAlert';

    export default {
        name: 'Using-Your-Own-Data',
        components: {
            VueSwitch,
            DataTable,
            OwnDataMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                data: {},
                tableProps: {
                    search: '',
                    length: 10,
                    column: 'id',
                    dir: 'asc'
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
                ]
            }
        },
        created() {
            this.getData(this.url);
        },
        mounted() {
            Prism.highlightAll();
        },
        methods: {
            getData(url = this.url, options = this.tableProps) {
                axios.get(url, {
                    params: options
                })
                .then(response => {
                    this.data = response.data;
                })
                .catch(errors => {
                    //Handle Errors
                })
            },
            reloadTable(tableProps) {
                this.getData(this.url, tableProps);
            }
        }
    }
</script>

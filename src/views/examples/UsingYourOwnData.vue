<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Using your own data and requests</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <pre v-highlightjs v-show="code">
            <own-data-markdown>
            </own-data-markdown>
        </pre>
        <data-table
            :data="data"
            v-show="!code"
            :columns="columns"
            @onTablePropsChanged="reloadTable">
        </data-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import VueSwitch from '../../components/generic/Switch';
    import OwnDataMarkdown from '../../markdown/examples/own-data.md';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            OwnDataMarkdown,
            // eslint-disable-next-line
            VueSwitch,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                data: {},
                tableProps: {
                    search: '',
                    length: 10,
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
            this.getData(process.env.VUE_APP_ELOQUENT_URL);
        },
        methods: {
            getData(url = this.url, options = this.tableProps) {
                axios.get(url, {
                    params: options
                })
                .then(response => {
                    this.data = response.data;
                })
                // eslint-disable-next-line
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

<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">
                    Reloading the Datatable
                </h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>
    
        <div class="row">
            <div class="col-md-12 mb-2">
                <button class="btn btn-primary" @click="reloadTable">
                    Reload Table
                </button>
            </div>
            <div class="col-md-12">
                <pre v-show="code">
                    <reload-the-table-markdown>
                    </reload-the-table-markdown>
                </pre>
                <data-table
                    v-show="!code"
                    :url="url"
                    :columns="columns"
                    ref="reloadingTheTable">
                </data-table>
            </div>
        </div>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import VueSwitch from '../../example-components/Switch';
    import InformationAlert from '../../example-components/InformationAlert';
    import ReloadTheTableMarkdown from '../../markdown/examples/reloading-the-table.md';
    
    export default {
        name: 'Reloading-The-Datatable',
        components: {
            VueSwitch,
            ReloadTheTableMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                        width: 20,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                        width: 40,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                        width: 40,
                    },
                ]
            }
        },
        methods: {
            reloadTable() {
                this.$refs.reloadingTheTable.getData()
            }
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>

<template>
    <div>
        <div class="flex flex-wrap">
            <div class="w-2/3">
                <h2>Basic Example</h2>
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
                <basic-markdown>
                </basic-markdown>
            </pre>
            <data-table
                :url="url"
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
    import BasicMarkdown from '../../markdown/examples/basic.md';
    
    export default {
        name: 'Basic',
        components: {
            VueSwitch,
            DataTable,
            BasicMarkdown,
        },
        methods: {
            paginationChangePage(url) {
                console.log(url)
            }
        },
        mounted() {
            Prism.highlightAll();
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
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        label: 'Cost (&pound;)',
                        name: 'cost',
                        orderable: true,
                        transform: ({data, name}) => `&pound;${data[name]}`,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                ]
            }
        },
    }
</script>

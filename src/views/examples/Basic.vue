<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Basic Example</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <pre v-highlightjs v-show="code">
            <basic-markdown>
            </basic-markdown>
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
    import VueSwitch from '../../components/generic/Switch';
    import BasicMarkdown from '../../markdown/examples/basic.md';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            BasicMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
                framework: "tailwind",
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

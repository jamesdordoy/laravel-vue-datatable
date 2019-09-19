<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h2 class="markdown-header">Basic Example</h2>
            </div>
            <div class="col-md-6">
                 <code-toggle
                    v-model="code">
                </code-toggle>
            </div>
        </div>
        <pre v-highlightjs v-show="code">
            <basic-markdown>
            </basic-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
        </data-table>
    </div>
</template>

<script>

    
    import DataTable from '../../components/DataTable.vue';
    import BasicMarkdown from '../../markdown/examples/basic.md';
    import CodeToggle from '../../components/generic/CodeToggle.vue';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            CodeToggle,
            // eslint-disable-next-line
            BasicMarkdown,
        },
        mixins: [CorrectTextStyling],
        data() {
            return {
                code: false,
                url: process.env.VUE_APP_DATATABLE_URL,
                perPage: ['10', '25', '50'],
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
                ]
            }
        },
    }
</script>

<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Styling</h2>
            </div>
        </div>

        <information-alert>
            You can edit the style of the Datatable by overriding the <code>classes</code> prop. A example mixin config can be found be below for Tailwind:
        </information-alert>
        
        <pre v-highlightjs v-show="code">
            <styling-markdown>
            </styling-markdown>
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
    import StylingMarkdown from '../../markdown/examples/styling.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    
    export default {
        name: 'Datatable-Styling',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            StylingMarkdown,
            // eslint-disable-next-line
            InformationAlert,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_ELOQUENT_URL,
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

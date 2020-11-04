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
        <div class="flex flex-wrap" v-show="!code">
            You can attach classes to each table as required using the classes prop
        </div>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import StylingMarkdown from '../../markdown/examples/styling.md';
    import InformationAlert from '../../example-components/InformationAlert';
    
    export default {
        name: 'Datatable-Styling',
        components: {
            DataTable,
            StylingMarkdown,
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
        },
    }
</script>

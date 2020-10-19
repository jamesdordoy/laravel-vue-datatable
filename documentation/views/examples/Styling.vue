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
        <div class="row" v-show="!code">
            <div class="col-md-12">
                <img class="img-fluid" src="https://camo.githubusercontent.com/7180948a51bbf1070479820b5cd7c8abd26239f8/68747470733a2f2f7777772e6a616d6573646f72646f792e636f2e756b2f696d616765732f70726f6a656374732f7461696c77696e642d646174617461626c652e706e67">
            </div>
        </div>
    </div>
</template>

<script>
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import StylingMarkdown from '../../markdown/examples/styling.md';
    import InformationAlert from '@/components/generic/InformationAlert.vue';
    
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
    }
</script>

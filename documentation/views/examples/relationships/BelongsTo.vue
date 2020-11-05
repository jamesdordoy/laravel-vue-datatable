<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">BelongsTo Example</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>
        <information-alert>
            Note that the Datatable columnName attributes reflect their table name as well. This is to avoid integrity contraint violations caused by ambiguoius column selection.
        </information-alert>
        <pre v-highlightjs v-show="code">
            <belongs-to-php-markdown>
            </belongs-to-php-markdown>
            <belongs-to-js-markdown>
            </belongs-to-js-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
        </data-table>
    </div>
</template>

<script>

    import Prism from 'prismjs';
    import DataTable from '@/components/DataTable.vue';
    import CodeExample from '../../../mixins/CodeExample';
    import VueSwitch from '../../../example-components/Switch';
    import InformationAlert from '../../../example-components/InformationAlert.vue';
    import BelongsToJsMarkdown from '../../../markdown/examples/relationships/belongs-to-js.md';
    import BelongsToPhpMarkdown from '../../../markdown/examples/relationships/belongs-to-php.md';
    
    export default {
        name: 'Basic',
        components: {
            DataTable,
            VueSwitch,
            InformationAlert,
            BelongsToJsMarkdown,
            BelongsToPhpMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                name: 'BelongsTo-Example',
                url: process.env.VUE_APP_ELOQUENT_URL,
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        columnName: 'users.id',
                        orderable: true,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        columnName: 'users.name',
                        orderable: true,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        columnName: 'users.email',
                        orderable: true,
                    },
                    {
                        label: 'Role',
                        name: 'role.name',
                        columnName: 'roles.name',
                        orderable: true,
                    },
                ]
            }
        },
        mounted() {
            this.$nextTick(Prism.highlightAll);
        },
    }
</script>

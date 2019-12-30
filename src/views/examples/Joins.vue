<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">
                    Table Joins, Filters &amp; Searching
                </h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            For more complex filtering, it is suggested to use the query builder as you are able to make cross table queries and searches in only a single call to the database.
            This will also provide you with the most control over how data is selected and searched upon.
        </information-alert>

        <div v-show="code">

            <pre v-highlightjs>
                <joins-php-markdown>
                </joins-php-markdown>
            </pre>

            <information-alert>
                You will also need to add an additional attribute to each column as <code>columnName</code> to any column names that have been changed. This will be sent to the backend for filtering and searching. It is required you prefix these values with their table name where Integrity constraint violations may be present due to duplicated column names.
            </information-alert>

            <pre v-highlightjs>
                <joins-js-markdown>
                </joins-js-markdown>
            </pre>
        </div>

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
    import VueSwitch from '../../components/generic/Switch';
    import JoinsPhpMarkdown from '../../markdown/examples/joins-php.md';
    import JoinsJsMarkdown from '../../markdown/examples/joins-js.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            JoinsPhpMarkdown,
            // eslint-disable-next-line
            JoinsJsMarkdown,
            // eslint-disable-next-line
            InformationAlert
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_QUERY_BUILDER_URL,
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                    },
                    {
                        label: 'Department Name',
                        name: 'department_name',
                        columnName: 'departments.name',
                        orderable: true,
                    },
                    {
                        label: 'Role Name',
                        name: 'role_name',
                        columnName: 'roles.name',
                        orderable: true,
                    },
                    {
                        label: 'Name',
                        name: 'user_name',
                        columnName: 'users.name',
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

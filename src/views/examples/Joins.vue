<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">
                    Table Joins, Filters &amp; Searching
                </h2>
            </div>
        </div>

        <div v-show="code">

            <information-alert>
                For more complex filtering, it is suggested to use the query builder as you are able to make cross table queries and searches in only a single call to the database. You can add your own joins to the default query provided by the package to add additional data but you will have to reselect the data you want and as previous filters have been applied by the default searching, please use the <code>orWhere</code> method to apply additional filters as using <code>where</code> will clear the previously set search filters.

                There is a default method for setting up the datatable query using the builder which can be seen below:
            </information-alert>

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
    import JoinsPhpMarkdown from '../../markdown/examples/joins-php.md';
    import JoinsJsMarkdown from '../../markdown/examples/joins-js.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            DataTable,
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
                        filterable: true,
                    },
                    {
                        label: 'Department Name',
                        name: 'department_name',
                        columnName: 'departments.name',
                        filterable: true,
                    },
                    {
                        label: 'Role Name',
                        name: 'role_name',
                        columnName: 'roles.name',
                        filterable: true,
                    },
                    {
                        label: 'Name',
                        name: 'user_name',
                        columnName: 'users.name',
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

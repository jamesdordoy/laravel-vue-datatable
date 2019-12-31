<template>
    <div>
        <h2 class="markdown-header">Relationships</h2>
        <information-alert>
            The current implementation requires that you disable ONLY_FULL_GROUP_BY in your database configuration.
            
            Run <code>php artisan config:cache</code> after making your changes to your database configuration.
            <br><br>
            If you cannot turn off strict mode or are unable to remove the ONLY_FULL_GROUP_BY configuration. You can still make use of this packing using your own Eloquent or QueryBuilder queries and by paginating the results for the Datatable Collection Resource.
        </information-alert>
        <pre v-highlightjs>
            <my-sql-config>
            </my-sql-config>
        </pre>

        <h2 class="markdown-header">Adding Relationships</h2>
        <pre v-highlightjs>
            <relationship-markdown>
            </relationship-markdown>
        </pre>
    </div>
</template>

<script>

    import CorrectTextStyling from '../../../mixins/CorrectTextStyling';
    import InformationAlert from '../../../components/generic/InformationAlert.vue';
    import RelationshipMarkdown from '../../../markdown/examples/relationships/introduction.md';
    import MySqlConfig from '../../../markdown/examples/relationships/mysql-config.md';
    
    export default {
        name: 'Relationships-Introduction',
        mixins: [CorrectTextStyling],
        components: {
            // eslint-disable-next-line
            RelationshipMarkdown,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            MySqlConfig
        },
    }
</script>

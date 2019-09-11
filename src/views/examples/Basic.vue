<template>
    <div>
        <label>
            Show Code
            <input type="checkbox" v-model="code">
        </label>
        <pre v-highlightjs v-if="code">
            <basic-markdown>
            </basic-markdown>
        </pre>
        <data-table
            v-else
            :url="url"
            :columns="columns"
            :per-page="perPage"
            :pagination="pagination">
        </data-table>
    </div>
</template>

<script>

    import DataTable from '../../components/DataTable.vue';
    import BasicMarkdown from '../../markdown/examples/basic.md';

    export default {
        name: 'basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            BasicMarkdown,
        },
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
                ],
                pagination:{
                    limit: 1,
                    align: "right",
                    size: "small"
                }
            }
        },
    }
</script>

<template>
    <div>
        <label>
            Show Code
            <input type="checkbox" v-model="code">
        </label>
        <div>
            <p>
                You can also inject your own components into the table such as buttons. Your buttons, links etc can also listen for events. After declaring your event type and setting a handler. You can accept the event type as you would expect in your component, e.g. `click` for click events.
            </p>
        </div>
        <pre v-highlightjs v-if="code">
            <dynamic-markdown>
            </dynamic-markdown>
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
    import DynamicMarkdown from '../../markdown/examples/injecting-dynamic-components.md';

    export default {
        name: 'basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            DynamicMarkdown,
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

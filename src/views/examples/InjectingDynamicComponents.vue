<template>
    <div>
        <code-toggle
            v-model="code">
        </code-toggle>
        <information-alert>
            You can also inject your own components into the table such as buttons. Your buttons, links etc can also listen for events. After declaring your event type and setting a handler. You can accept the event type as you would expect in your component, e.g. `click` for click events.
        </information-alert>
        <pre v-highlightjs v-show="code">
            <dynamic-markdown>
            </dynamic-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns"
            :per-page="perPage"
            :pagination="pagination">
        </data-table>
    </div>
</template>

<script>

    import DataTable from '../../components/DataTable.vue';
    import CodeToggle from '../../components/generic/CodeToggle.vue';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import DataTableButtonCell from '../../components/generic/DataTableButtonCell.vue';
    import DynamicMarkdown from '../../markdown/examples/injecting-dynamic-components.md';

    export default {
        name: 'injecting-dyanmic-components',
        mixins: [CorrectTextStyling],
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            DynamicMarkdown,
            // eslint-disable-next-line
            DataTableButtonCell,
            CodeToggle,
            InformationAlert,
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
                    {
                        label: '',
                        name: 'View',
                        filterable: false,
                        event: "click",
                        handler: this.displayRow,
                        component: DataTableButtonCell,
                        meta: {
                            foo: "bar"
                        },
                        classes: { 
                            'btn': true,
                            'btn-primary': true,
                            'btn-sm': true,
                        },
                        width: 10,
                    },
                ],
                pagination:{
                    limit: 1,
                    align: "right",
                    size: "small"
                }
            }
        },
        methods: {
            displayRow(data) {
                alert(`You clicked row ${data.id}`);
            }
        },
    }
</script>

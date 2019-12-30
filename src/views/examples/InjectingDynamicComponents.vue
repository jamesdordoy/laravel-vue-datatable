<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Injecting Components</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            You can also inject your own components into the table such as buttons. Your buttons, links etc can also listen for events. After declaring your event type and setting a handler. You can accept the event type as you would expect in your component, e.g. <code>click</code> for click events.
        </information-alert>
        
        <pre v-highlightjs v-show="code">
            <dynamic-markdown>
            </dynamic-markdown>
        </pre>
        <data-table
            :url="url"
            v-show="!code"
            :columns="columns">
        </data-table>
    </div>
</template>

<script>

    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import VueSwitch from '../../components/generic/Switch';
    import DataTableImageCell from '../../components/generic/DataTableImageCell';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import DataTableButtonCell from '../../components/generic/DataTableButtonCell.vue';
    import DynamicMarkdown from '../../markdown/examples/injecting-dynamic-components.md';

    export default {
        name: 'injecting-dyanmic-components',
        mixins: [CodeExample],
        components: {
            // eslint-disable-next-line
            DataTable,
            //eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            DynamicMarkdown,
            // eslint-disable-next-line
            DataTableButtonCell,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            DataTableImageCell,
        },
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
                    {
                        label: 'Profile Image',
                        name: 'img',
                        orderable: true,
                        component: DataTableImageCell,
                    },
                    {
                        label: '',
                        name: 'View',
                        orderable: false,
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
                ]
            }
        },
        methods: {
            displayRow(data) {
                alert(`You clicked row ${data.id}`);
            }
        },
    }
</script>

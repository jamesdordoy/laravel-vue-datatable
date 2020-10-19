<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Overriding the Datatable body</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>

        <information-alert>
            If you want more control over the rendered table rows, you can use the <code>body</code> slot to override the default table HTML.
        </information-alert>

        <pre v-highlightjs v-show="code">
            <override-table-body-markdown>
            </override-table-body-markdown>
        </pre>

        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
            <tbody slot="body" slot-scope="{ data }">
                <tr
                    :key="item.id"
                    v-for="item in data"
                    @click="showRowNumber(item.id)">
                    <td 
                        :key="column.name"
                        v-for="column in columns">
                        <data-table-cell
                            :value="item"
                            :name="column.name"
                            :meta="column.meta"
                            :comp="column.component"
                            :classes="column.classes">
                        </data-table-cell>
                    </td>
                </tr>
            </tbody>
        </data-table>
    </div>
</template>

<script>
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '@/components/generic/Switch';
    import InformationAlert from '@/components/generic/InformationAlert.vue';
    import OverrideTableBodyMarkdown from '../../markdown/examples/override-table-body.md';
    
    export default {
        name: 'Override-Table-Body',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            OverrideTableBodyMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                name: 'Override-Table-Body',
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
        methods: {
            showRowNumber(id) {
                alert(`you clicked row ${id}`);
            }
        }
    }
</script>

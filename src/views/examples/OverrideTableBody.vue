<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Overriding the Datatable body</h2>
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
            :columns="columns"
            :per-page="perPage">
            <tbody slot="body" slot-scope="{ data }">
                <tr
                    :key="item.id"
                    @click="showRowNumber(item.id)"
                    v-for="item in data">
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
    import DataTable from '../../components/DataTable.vue';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import OverrideTableBodyMarkdown from '../../markdown/examples/override-table-body.md';
    
    export default {
        name: 'Override-Table-Body',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            OverrideTableBodyMarkdown,
            // eslint-disable-next-line
            InformationAlert,
        },
        mixins: [CodeExample],
        data() {
            return {
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

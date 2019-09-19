
<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <h2 class="markdown-header">Overriding the Filters and Pagination Components</h2>
            </div>
            <div class="col-md-6">
                 <code-toggle
                    v-model="code">
                </code-toggle>
            </div>
        </div>
        <information-alert>
            If the included pagination or filters do not meet your requirements or if the styling is incorrect, they can be over-written using scoped slots.
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

    
    import DataTable from '../../components/DataTable.vue';
    import OverrideTableBodyMarkdown from '../../markdown/examples/override-table-body.md';

    import InformationAlert from '../../components/generic/InformationAlert.vue';
    import CodeToggle from '../../components/generic/CodeToggle.vue';
    import CorrectTextStyling from '../../mixins/CorrectTextStyling';

    export default {
        name: 'Override-Table-Body',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            CodeToggle,
            // eslint-disable-next-line
            OverrideTableBodyMarkdown,
            // eslint-disable-next-line
            InformationAlert,
        },
        mixins: [CorrectTextStyling],
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

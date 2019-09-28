
<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <h2 class="markdown-header">Overriding the Filters and Pagination Components</h2>
            </div>
        </div>
        <information-alert>
            If the included pagination or filters do not meet your requirements or if the styling is incorrect, they can be over-written using scoped slots.
        </information-alert>
        <pre v-highlightjs v-show="code">
            <override-filters-and-pagination>
            </override-filters-and-pagination>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns">
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
    import OverrideFiltersAndPagination from '../../markdown/examples/override-filters-and-pagination.md';

    export default {
        name: 'Override-Table-Filters-And-Pagination',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            InformationAlert,
            // eslint-disable-next-line
            OverrideFiltersAndPagination,
        },
        mixins: [CodeExample],
        data() {
            return {
                url: process.env.VUE_APP_DATATABLE_URL,
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

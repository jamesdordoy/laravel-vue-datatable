<template>
    <div style="background: #5e717d;">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <a class="navbar-brand" href="#">Logo</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link 3</a>
                </li>
            </ul>
        </nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 mt-4 mb-4">
                    <data-table
                        :url="url"
                        :columns="columns"
                        :per-page="perPage"
                        :pagination="pagination">
                    </data-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Filters from './components/Filters.vue';
    import DataTable from './components/DataTable.vue';
    import Pagination from './components/Pagination.vue';
    import DataTableButtonCell from './components/generic/DataTableButtonCell.vue';
    import DataTableAnchorCell from './components/generic/DataTableAnchorCell.vue';
    import DataTableDateCell from './components/generic/DataTableDateCell.vue';

    export default {
        name: 'app',
        data() {
            return {
                url: process.env.VUE_APP_DATATABLE_URL,
                perPage: ['10', '25', '50'],
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        filterable: true,
                        width: 10,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        filterable: true,
                        width: 20,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        filterable: true,
                        component: DataTableAnchorCell,
                        width: 20,
                    },
                    {
                        label: 'Created On',
                        name: 'created_at',
                        filterable: true,
                        component: DataTableDateCell,
                        width: 20,                        
                    },
                    {
                        label: 'Last Updated',
                        name: 'updated_at',
                        filterable: true,
                        component: DataTableDateCell,
                        width: 20,
                    },
                    {
                        label: '',
                        name: 'View',
                        filterable: false,
                        click: this.alertMe,
                        component: DataTableButtonCell,
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
            updateUrl(url) {
                this.url = url;
            },
            alertMe() {
                alert("hey");
            }
        },
        components: {
            // eslint-disable-next-line
            DataTableButtonCell,
            // eslint-disable-next-line
            DataTableAnchorCell,
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            Pagination,
            // eslint-disable-next-line
            Filters
        }
    }
</script>

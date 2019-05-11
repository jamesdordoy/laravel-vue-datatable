<template>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <!-- Brand/logo -->
            <a class="navbar-brand" href="#">Logo</a>
            
            <!-- Links -->
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
                            url="http://vue-datatable.test/ajax"
                            :per-page="perPage"
                            :columns="columns">
                        </data-table>
                  </div>
              </div>
          </div>
    </div>
</template>

<script>

    import DataTable from './components/DataTable.vue'
    import DataTableButtonCell from './components/generic/DataTableButtonCell.vue'
    import DataTableAnchorCell from './components/generic/DataTableAnchorCell.vue'

    export default {
        name: 'app',
        data() {
            return {
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
                        component: DataTableAnchorCell
                    },
                    {
                        label: '',
                        name: 'View',
                        filterable: false,
                        component: DataTableButtonCell,
                        classes: { 
                            'btn': true,
                            'btn-primary': true,
                            'btn-sm': true,
                        } 
                    },
                ]
            }
        },
        components: {
            // eslint-disable-next-line
            DataTableButtonCell,
            // eslint-disable-next-line
            DataTableAnchorCell,
            // eslint-disable-next-line
            DataTable
        }
    }
</script>

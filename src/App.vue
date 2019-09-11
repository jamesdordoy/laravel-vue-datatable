<template>

    <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Laravel Vue Datatable</div>
      <div class="list-group list-group-flush">
        <router-link
            class="list-group-item list-group-item-action bg-light"
            to="/laravel-vue-datatable/introduction">
            Introduction
        </router-link>
        <router-link
            class="list-group-item list-group-item-action bg-light"
            to="/laravel-vue-datatable">
            Installation
        </router-link>
        <a href="#" class="list-group-header list-group-item-action bg-light">Props</a>
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/props/table">
            Table Props
        </router-link>
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/props/column">
            Column Props
        </router-link>

        <a href="#" class="list-group-header list-group-item-action bg-light">Examples</a>
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples/basic">
            Basic Example
        </router-link>
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples">
            Injecting Dynamic Components
        </router-link>
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples">
            Overriding the Filter &amp; Pagination Components
        </router-link>
            
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples">
            Overriding the Table Body
        </router-link>
            
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples">
            Adding Custom Filters to the table
        </router-link>
            
        <router-link
            class="list-group-item list-group-item-action bg-light indent-1"
            to="/laravel-vue-datatable/examples">
            Styling the Datatable
        </router-link>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            target="_blank"
                            href="https://github.com/jamesdordoy/Laravel-Vue-Datatable">
                            <font-awesome-icon :icon="['fab', 'vuejs']" />
                            Component Github Repo
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            target="_blank"
                            href="https://github.com/jamesdordoy/Laravel-Vue-Datatable_Laravel-Package">
                            <font-awesome-icon :icon="['fab', 'php']" />
                            Laravel Package Github Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->
</template>

<style scoped>
.container-fluid {
    padding-top: 10px;
}

/*!
 * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)
 * Copyright 2013-2019 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)
 */
body {
  overflow-x: hidden;
}

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

.list-group-header {
    padding: 6px 20px;
    font-size: 0.8em;
    background: #ccc !important;
}

.list-group-header:hover {
    background:#ccc !important;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}

#page-content-wrapper {
  min-width: 100vw;
}

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.indent-1 {
    padding-left: 26px;
}
</style>

<script>

    import Filters from './components/Filters.vue';
    import DataTable from './components/DataTable.vue';
    import Pagination from './components/Pagination.vue';
    import DataTableFilters from './components/DataTableFilters.vue';
    import DataTableCell from './components/DataTableCell.vue';
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
                        event: "click",
                        handler: this.alertMe,
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
                filters: {
                    isAdmin: '',
                },
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
            alertMe(data) {
                alert("You have clicked ID: " + data.id);
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
            Filters,
            // eslint-disable-next-line
            DataTableFilters,
            // eslint-disable-next-line
            DataTableCell
        }
    }
</script>

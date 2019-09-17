<template>
    <div class="bg-light" id="sidebar-wrapper">
        <div class="sidebar-heading">
            Laravel Vue Datatable
        </div>
        <div class="list-group list-group-flush border-right">
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light"
                to="/laravel-vue-datatable">
                Introduction
            </router-link>
            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fab', 'laravel']" />&nbsp;
                Laravel Package
            </a>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/laravel/installation">
                Installation
            </router-link>

            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/laravel/options">
                Package Options
            </router-link>

            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/laravel/trait">
                Adding the Trait to the model
            </router-link>

            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/laravel/controller-resource">
                Using the controller resource
            </router-link>

            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;
                Vue Package
            </a>
            <router-link
                class="list-group-item list-group-item-action nav-item-light"
                to="/laravel-vue-datatable/installation">
                Installation
            </router-link>
            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fas', 'project-diagram']" />&nbsp;
                Props
            </a>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/props/table">
                Table Props
            </router-link>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/props/column">
                Column Props
            </router-link>

            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fas', 'table']" />&nbsp;
                Examples
            </a>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/basic">
                Basic Example
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/injecting-dynamic-components">
                Injecting Dynamic Components
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/override-filters">
                Overriding the Filter &amp; Pagination Components
            </router-link>
                
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/override-table-body">
                Overriding the Table Body
            </router-link>
                
            <router-link    
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/custom-filters">
                Adding Custom Filters to the table
            </router-link>
                
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/styling">
                Styling the Datatable
            </router-link>
        </div>
    </div>
</template>


<style>

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

.nav-item-light {
    background: #f8f9fa!important;
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
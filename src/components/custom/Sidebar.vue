<template>
    <div class="bg-light" id="sidebar-wrapper">
        <div class="list-group list-group-flush border-right sidebar-menu">
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
                Adding the Trait
            </router-link>

            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/laravel/controller-resource">
                Using the API Resource
            </router-link>

            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;
                Vue Package
            </a>

            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/installation">
                Installation
            </router-link>

            <a href="#" class="list-group-header list-group-item-action indent-1">
                <font-awesome-icon :icon="['fas', 'project-diagram']" />&nbsp;
                Props
            </a>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-2"
                to="/laravel-vue-datatable/props/table">
                Table Props
            </router-link>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-2"
                to="/laravel-vue-datatable/props/column">
                Column Props
            </router-link>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-2"
                to="/laravel-vue-datatable/props/cell">
                Cell Props
            </router-link>

            <a href="#" class="list-group-header list-group-item-action indent-1">
                <font-awesome-icon :icon="['fas', 'project-diagram']" />&nbsp;
                Events
            </a>
            <router-link
                class="list-group-item list-group-item-action nav-item-light indent-2"
                to="/laravel-vue-datatable/events/table">
                Table Events
            </router-link>

            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fas', 'table']" />&nbsp;
                Table Examples
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
                Injecting Components
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
                to="/laravel-vue-datatable/examples/override-table-body">
                Overriding the Table Body
            </router-link>

            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/override-table-header">
                Overriding the Table Header
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
                to="/laravel-vue-datatable/examples/reload-table">
                Reloading the table
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/styling">
                Styling the Datatable
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/modal">
                Modal Example
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/tailwind">
                Tailwind Example
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/loading-animations">
                Loading Animations
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/crud">
                C.R.U.D. Example
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/own-data">
                Using Your Own Data
            </router-link>
            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fas', 'restroom']" />&nbsp;
                Relationships
            </a>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/relationships">
                Introduction
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/belongs-to">
                BelongsTo
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/has-many">
                HasMany
            </router-link>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/belongs-to-many">
                BelongsToMany
            </router-link>
            <a href="#" class="list-group-header list-group-item-action">
                <font-awesome-icon :icon="['fas', 'hammer']" />&nbsp;
                Query Builder
            </a>
            <router-link
                exact
                class="list-group-item list-group-item-action nav-item-light indent-1"
                to="/laravel-vue-datatable/examples/joins">
                Table Joins
            </router-link>
        </div>
    </div>
</template>


<style>

#sidebar-wrapper {
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

.sidebar-menu {
    overflow-y: scroll;
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

.indent-2 {
    padding-left: 38px;
}
</style>
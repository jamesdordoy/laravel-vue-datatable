<template>
    <div class="bg-light" id="sidebar-wrapper">
        <div class="sidebar-heading">
            Laravel Vue Datatable
        </div>
        <div class="list-group list-group-flush border-right">
            <router-link
                class="list-group-item list-group-item-action bg-light"
                to="/laravel-vue-datatable">
                Introduction
            </router-link>
            <router-link
                class="list-group-item list-group-item-action bg-light"
                to="/laravel-vue-datatable/installation">
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
</template>
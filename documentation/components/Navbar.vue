<script>
export default {
    mounted() {
        this.toggleMenuItem('.laravel-menu')
    },
    methods: {
        toggleMenuItem(className) {
            document.querySelector(className).classList.toggle('max-h-auto');
            document.querySelector(className).classList.toggle('max-h-0');
        },
    }
}
</script>
 
<template>
    <nav class="varela">
        <ul>
            <router-link
                exact
                tag="li"
                to="/laravel-vue-datatable"
                class="block p-3 hover:bg-gray-300 cursor-pointer">
                Introduction
            </router-link>
            <li class="block m-0 text-sm overflow-hidden cursor-pointer">
                
                <div class="w-full px-3 py-1 bg-gray-400 oxanium" @click="toggleMenuItem('.laravel-menu')">
                    <font-awesome-icon :icon="['fab', 'laravel']" />&nbsp;
                    Laravel Package
                    <span class="float-right">
                        &gt;
                    </span>
                </div>

                <ul class="laravel-menu slideDown m-0 p-0 max-h-0">
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/laravel/installation">
                        Installation
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/laravel/options">
                        Package Options
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/laravel/trait">
                        Adding the Trait
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/laravel/controller-resource">
                        Using the API Resource
                    </router-link>
                </ul>
            </li>
            <li class="block m-0 text-sm overflow-hidden cursor-pointer">
                
                <div class="w-full px-3 py-1 bg-gray-400 oxanium" @click="toggleMenuItem('.vue-menu')">
                    <font-awesome-icon :icon="['fab', 'vuejs']" />&nbsp;
                    Vue Package
                    <span class="float-right">
                        &gt;
                    </span>
                </div>

                <ul class="vue-menu m-0 p-0 max-h-0 overflow-hidden">
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/installation">
                        Installation
                    </router-link>

                    <div class="w-full pr-3 pl-6 py-1 bg-gray-500 oxanium" @click="toggleMenuItem('.props-menu')">
                        <font-awesome-icon :icon="['fas', 'project-diagram']" />&nbsp;
                        Props
                        <span class="float-right">
                            &gt;
                        </span>
                    </div>
                    <ul class="props-menu m-0 p-0 max-h-0 overflow-hidden">
                        <router-link
                            tag="li"
                            class="block p-3 hover:bg-gray-300 cursor-pointer"
                            to="/laravel-vue-datatable/props/table">
                            Table Props
                        </router-link>
                        <router-link
                            tag="li"
                            class="block p-3 hover:bg-gray-300 cursor-pointer"
                            to="/laravel-vue-datatable/props/column">
                            Column Props
                        </router-link>
                        <router-link
                            tag="li"
                            class="block p-3 hover:bg-gray-300 cursor-pointer"
                            to="/laravel-vue-datatable/props/cell">
                            Cell Props
                        </router-link>
                    </ul>

                    

                    <div class="w-full pr-3 pl-6 py-1 bg-gray-500 oxanium" @click="toggleMenuItem('.events-menu')">
                        <font-awesome-icon :icon="['fas', 'project-diagram']" />&nbsp;
                        Events
                        <span class="float-right">
                            &gt;
                        </span>
                    </div>

                    <ul class="events-menu m-0 p-0 max-h-0 overflow-hidden">
                        <router-link
                            tag="li"
                            class="block p-3 hover:bg-gray-300 cursor-pointer"
                            to="/laravel-vue-datatable/events/table">
                            Table Events
                        </router-link>
                    </ul>
                </ul>
            </li>
            <li class="block m-0 text-sm overflow-hidden cursor-pointer">
                
                <div class="w-full px-3 py-1 bg-gray-400 oxanium" @click="toggleMenuItem('.examples-menu')">
                    <font-awesome-icon :icon="['fas', 'table']" />&nbsp;
                    Table Examples
                    <span class="float-right">
                        &gt;
                    </span>
                </div>

                <ul class="examples-menu m-0 p-0 max-h-0">
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/basic">
                        Basic Example
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/injecting-dynamic-components">
                        Injecting Components
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/override-filters">
                        Overriding the Filter &amp; Pagination Components
                    </router-link>
                        
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/override-table-body">
                        Overriding the Table Body
                    </router-link>

                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/override-table-header">
                        Overriding the Table Header
                    </router-link>
                        
                    <router-link    
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/custom-filters">
                        Adding Custom Filters to the table
                    </router-link>
                    <router-link    
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/reload-table">
                        Reloading the table
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/styling">
                        Styling the Datatable
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/modal">
                        Modal Example
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/tailwind">
                        Tailwind Example
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/loading-animations">
                        Loading Animations
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/crud">
                        C.R.U.D. Example
                    </router-link>
                    <router-link
                        exact
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/own-data">
                        Using Your Own Data
                    </router-link>
                </ul>
            </li>

            <li class="block m-0 text-sm overflow-hidden cursor-pointer">
                
                <div class="w-full px-3 py-1 bg-gray-400 oxanium" @click="toggleMenuItem('.relationships-menu')">
                    <font-awesome-icon :icon="['fas', 'restroom']" />&nbsp;
                    Relationships
                    <span class="float-right">
                        &gt;
                    </span>
                </div>

                <ul class="relationships-menu m-0 p-0 max-h-0">
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/relationships">
                        Introduction
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/belongs-to">
                        BelongsTo
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/has-many">
                        HasMany
                    </router-link>
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/belongs-to-many">
                        BelongsToMany
                    </router-link>
                </ul>
            </li>

            <li class="block m-0 text-sm overflow-hidden cursor-pointer">
                
                <div class="w-full px-3 py-1 bg-gray-400 oxanium" @click="toggleMenuItem('.query-builder-menu')">
                    <font-awesome-icon :icon="['fas', 'hammer']" />&nbsp;
                    Query Builder
                    <span class="float-right">
                        &gt;
                    </span>
                </div>

                <ul class="query-builder-menu m-0 p-0 max-h-0">
                    <router-link
                        tag="li"
                        class="block p-3 hover:bg-gray-300 cursor-pointer"
                        to="/laravel-vue-datatable/examples/joins">
                        Table Joins
                    </router-link>
                </ul>
            </li>
        </ul>
    </nav>
</template>
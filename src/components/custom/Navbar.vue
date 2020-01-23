<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
        <button
            type="button"
            @click="toggleMenu"
            aria-expanded="false"
            data-toggle="toggled"
            class="navbar-toggler"
            data-target="#sidebar-wrapper"
            aria-controls="navbarCollapse"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a href="#" class="navbar-brand">Laravel Vue Datatable</a>
        <button
            type="button"
            aria-expanded="false"
            data-toggle="collapse"
            class="navbar-toggler"
            data-target="#navbarCollapse"
            aria-label="Toggle navigation"
            aria-controls="navbarCollapse" >
            <font-awesome-icon :icon="['fab', 'github']" />
            &nbsp;
        </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
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
            <li class="nav-item">
                <a class="nav-link">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </a>
            </li>
        </ul>
      </div>
    </nav>
</template>

<script>

import VueSwitch from '../generic/Switch';

export default {
    components: {
        VueSwitch,
    },
    methods: {
        toggleMenu() {
            const wrapper = document.getElementById('sidebar-wrapper');

            if (wrapper.style.marginLeft == "0px") {
                document.getElementById('sidebar-wrapper').style.marginLeft = "-15rem";
            } else { 
                document.getElementById('sidebar-wrapper').style.marginLeft = 0;
            }     
        }
    },
}
</script>
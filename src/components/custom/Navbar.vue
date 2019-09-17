<template>
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
</template>

<script>
export default {
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
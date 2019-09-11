<template>
    <div class="d-flex" id="wrapper">
        <sidebar>
        </sidebar>
        <div id="page-content-wrapper">
            <navbar>
            </navbar>
            <div class="container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.container-fluid {
    padding-top: 10px;
}

.wrap-text {
    overflow-wrap: normal;
    white-space: normal;
}

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
    import Navbar from './components/custom/Navbar.vue';
    import Sidebar from './components/custom/Sidebar.vue';

    export default {
        name: 'app',
        components: {
            // eslint-disable-next-line
            Navbar,
            // eslint-disable-next-line
            Sidebar,
        },
        data() {
            return {
                url: process.env.VUE_APP_DATATABLE_URL,
            }
        },
    }
</script>

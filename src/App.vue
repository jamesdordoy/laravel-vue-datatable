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

</style>

<script>
    import Navbar from './components/custom/Navbar.vue';
    import Sidebar from './components/custom/Sidebar.vue';

    export default {
        name: 'app',
        components: {
            Navbar,
            Sidebar,
        },
        data() {
            return {
                url: process.env.VUE_APP_DATATABLE_URL,
            }
        },
    }
</script>

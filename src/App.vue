<template>
    <div class="d-flex" id="wrapper">
        <sidebar>
        </sidebar>
        <div id="page-content-wrapper">
            <navbar>
            </navbar>
            <div class="container-fluid pt-2">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>

html {
    background: #f8f9fa!important;
}

body {
    overflow-x: hidden;
    padding-top: 64px;
}

.container-fluid {
    padding-top: 10px;
}

p, h1, h2, h3, h4, h5 {
    overflow-wrap: normal;
    white-space: normal;
}

.wrap-text{
    overflow-wrap: normal;
    white-space: normal;
}

.router-link-active{
    background: #dae0e5 !important;
    border: 1px solid #ccc;
}

.markdown-header{ 
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 21px;
}

</style>

<script>
    import Navbar from './components/custom/Navbar.vue';
    import Sidebar from './components/custom/Sidebar.vue';

    export default {
        name: 'Documentation',
        components: {
            Navbar,
            Sidebar,
        },
    }
</script>

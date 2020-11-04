<template>
    <div class="h-screen">
        <page-header/>
        <div class="flex flex-wrap min-h-full">
            <div class="nav-container hidden lg:block w-full lg:w-1/6 bg-gray-100 min-h-full border-r">
                <navbar/>
            </div>
            <div class="w-full lg:w-5/6 min-h-full p-3">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<style>

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

.markdown-header{ 
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.2;
    margin-top: 21px;
}

.show-code-inline {
    position: absolute;
    bottom: 8px;
    right: 18px;
}

</style>

<script>
    import Navbar from '../documentation/components/Navbar';
    import PageHeader from '../documentation/components/Header';

    export default {
        name: 'LaravelVueDatatableDocumentation',
        components: {
            PageHeader,
            Navbar,
        },
    }
</script>

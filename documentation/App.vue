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

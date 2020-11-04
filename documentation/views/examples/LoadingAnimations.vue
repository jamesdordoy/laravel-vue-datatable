<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <h2 class="markdown-header">Loading Animations</h2>
            </div>
            <div class="col-md-4 relative">
                <div class="show-code-inline">
                    <label>Show Example Code</label>&nbsp;
                    <vue-switch></vue-switch>
                </div>
            </div>
        </div>
        <information-alert>
            This example makes use of the <code>vue-loading-overlay</code> Vue.js plugin which can be found <a href='https://github.com/ankurk91/vue-loading-overlay'>here</a> but you can use any loading animations you want.
        </information-alert>
        <pre v-show="code">
            <loading-animations-markdown>
            </loading-animations-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns"
            @loading="isLoading = true"
            @finished-loading="isLoading = false">
        </data-table>
        <loading 
            :active.sync="isLoading"
            :is-full-page="true">
        </loading>
    </div>
</template>

<script>

    import Prism from 'prismjs';
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '@/components/DataTable.vue';
    import VueSwitch from '../../example-components/Switch';
    import InformationAlert from '../../example-components/InformationAlert';
    import LoadingAnimationsMarkdown from '../../markdown/examples/loading-animations.md';
    
    export default {
        name: 'LoadingAnimations',
        components: {
            DataTable,
            VueSwitch,
            Loading,
            InformationAlert,
            LoadingAnimationsMarkdown,
        },
        mixins: [CodeExample],
        data() {
            return {
                isLoading: false,
                url: process.env.VUE_APP_ELOQUENT_URL,
                columns: [
                    {
                        label: 'ID',
                        name: 'id',
                        orderable: true,
                    },
                    {
                        label: 'Name',
                        name: 'name',
                        orderable: true,
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        orderable: true,
                    },
                ],
            }
        },
        mounted() {
            Prism.highlightAll();
        },
    }
</script>

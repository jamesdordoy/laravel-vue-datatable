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
            This example make use of the <code>vue-loading-overlay</code> Vue.js plugin which can be <a href='https://github.com/ankurk91/vue-loading-overlay'>here</a> but you can use any loading animations you want.
        </information-alert>
        <pre v-highlightjs v-show="code">
            <loading-animations-markdown>
            </loading-animations-markdown>
        </pre>
        <data-table
            v-show="!code"
            :url="url"
            :columns="columns"
            @loading="isLoading = true"
            @finishedLoading="isLoading = false">
        </data-table>
        <loading 
            :active.sync="isLoading"
            :is-full-page="true">
        </loading>
    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';
    import CodeExample from '../../mixins/CodeExample';
    import DataTable from '../../components/DataTable.vue';
    import VueSwitch from '../../components/generic/Switch';
    import LoadingAnimationsMarkdown from '../../markdown/examples/loading-animations.md';
    import InformationAlert from '../../components/generic/InformationAlert.vue';
    
    export default {
        name: 'Basic',
        components: {
            // eslint-disable-next-line
            DataTable,
            // eslint-disable-next-line
            LoadingAnimationsMarkdown,
            // eslint-disable-next-line
            VueSwitch,
            // eslint-disable-next-line
            Loading,
            // eslint-disable-next-line
            InformationAlert,
        },
        mixins: [CodeExample],
        data() {
            return {
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
                isLoading: false,
            }
        },
    }
</script>
